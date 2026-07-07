# handles transaction calls for a given user

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models.transaction import Transaction
from models.user import User
from schemas.transaction import TransactionCreate, TransactionResponse
from auth.dependencies import get_current_user


router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)


@router.get("/", response_model=list[TransactionResponse])
def get_transactions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    transactions = db.query(Transaction).filter(
        Transaction.user_id == current_user.id
    ).all()

    return transactions

@router.post("/", response_model=TransactionResponse)
def create_transaction(
    transaction: TransactionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    new_transaction = Transaction(
        user_id=current_user.id,
        description=transaction.description,
        amount=transaction.amount,
        type=transaction.type,
        category=transaction.category,
        date=transaction.date
    )

    db.add(new_transaction)
    db.commit()
    db.refresh(new_transaction)

    return new_transaction

@router.put("/{transaction_id}", response_model=TransactionResponse)
def update_transaction(
    transaction_id: int,
    transaction_data: TransactionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    transaction = db.query(Transaction).filter(
        Transaction.id == transaction_id,
        Transaction.user_id == current_user.id
    ).first()

    if transaction is None:
        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    transaction.description = transaction_data.description
    transaction.amount = transaction_data.amount
    transaction.type = transaction_data.type
    transaction.category = transaction_data.category
    transaction.date = transaction_data.date

    db.commit()
    db.refresh(transaction)

    return transaction

@router.delete("/{transaction_id}")
def delete_transaction(
    transaction_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    transaction = db.query(Transaction).filter(
        Transaction.id == transaction_id,
        Transaction.user_id == current_user.id
    ).first()

    if transaction is None:
        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    db.delete(transaction)
    db.commit()

    return {
        "message": "Transaction deleted"
    }
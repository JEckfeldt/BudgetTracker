# handles transaction calls for a given user

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models.transaction import Transaction
from models.user import User
from auth.dependencies import get_current_user


router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)


@router.get("/")
def get_transactions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    transactions = db.query(Transaction).filter(
        Transaction.user_id == current_user.id
    ).all()

    return transactions
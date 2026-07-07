from datetime import date
from enum import Enum

from pydantic import BaseModel


class TransactionType(str, Enum):
    income = "income"
    expense = "expense"



class TransactionCreate(BaseModel):
    description: str
    amount: float
    type: TransactionType
    category: str
    date: date



class TransactionResponse(TransactionCreate):
    id: int
    user_id: int

    class Config:
        from_attributes = True
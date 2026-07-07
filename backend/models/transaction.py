from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Date,
    ForeignKey,
    Enum
)

from sqlalchemy.orm import relationship
from enum import Enum as PyEnum

from database import Base


class TransactionType(PyEnum):
    income = "income"
    expense = "expense"


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    description = Column(
        String,
        nullable=False
    )

    amount = Column(
        Float,
        nullable=False
    )

    type = Column(
        Enum(TransactionType),
        nullable=False
    )

    category = Column(
        String,
        nullable=False
    )

    date = Column(
        Date,
        nullable=False
    )

    owner = relationship(
        "User",
        back_populates="transactions"
    )
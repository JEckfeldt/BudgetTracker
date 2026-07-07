from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from database import Base


# user model
# user has id, email, pwd, transactions, budgets

class User(Base):
    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    email = Column(
        String,
        unique=True,
        index=True,
        nullable=False
    )

    password_hash = Column(
        String,
        nullable=False
    )


    transactions = relationship(
        "Transaction",
        back_populates="owner",
        cascade="all, delete"
    )

    budgets = relationship(
        "Budget",
        back_populates="owner",
        cascade="all, delete"
    )
from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    ForeignKey
)

from sqlalchemy.orm import relationship

from database import Base


# Budget has a category, and belongs to a user, and has an id of its own
class Budget(Base):
    __tablename__ = "budgets"

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

    category = Column(
        String,
        nullable=False
    )

    limit = Column(
        Float,
        nullable=False
    )


    owner = relationship(
        "User",
        back_populates="budgets"
    )
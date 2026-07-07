from fastapi import FastAPI

from database import Base, engine
from models import User, Transaction, Budget

from routes import transactions
from routes.transactions import router as transaction_router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Budget Tracker API"
)


app.include_router(
    transactions.router
)


@app.get("/")
def root():
    return {
        "message": "API running"
    }

app.include_router(transaction_router)
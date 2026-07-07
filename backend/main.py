from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from models import User, Transaction, Budget

from routes.transactions import router as transaction_router
from routes.auth import router as auth_router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Budget Tracker API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def root():
    return {
        "message": "API running"
    }

app.include_router(transaction_router)
app.include_router(auth_router)
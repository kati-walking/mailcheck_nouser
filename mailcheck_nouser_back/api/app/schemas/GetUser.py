from pydantic import BaseModel
import User
class GetUser(User):
    id:int
    class Config:
        orm_mode=True

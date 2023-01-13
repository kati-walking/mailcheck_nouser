from fastapi import FastAPI,Depends,status,HTTPException
from fastapi.responses import JSONResponse,PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException as StarletteHTTPException
from pydantic import BaseModel
from datetime import datetime

from typing import List
import database
import models.user
import models.mail
import models.mailbox

from sqlalchemy import desc,func
from sqlalchemy.orm import session

import unicodedata
import imapclient
from backports import ssl
from OpenSSL import SSL
from datetime import date, datetime, timedelta
import pyzmail
import re

import json

app = FastAPI()

@app.get("/")
def read_root():
    return("hello world")
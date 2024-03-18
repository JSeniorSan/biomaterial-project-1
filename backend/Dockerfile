FROM python:3.11
RUN mkdir /biomaterials_backend
WORKDIR /biomaterials_backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# RUN alembic upgrade head
# CMD gunicorn src.main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000
RUN chmod a+x docker/*sh
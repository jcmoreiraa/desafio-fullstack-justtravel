import psycopg2

try:
    conn = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="postgres",
        host="localhost",  # troque aqui
        port=5432
    )
    print("Conectou!")
except Exception as e:
    print("Erro:", e)

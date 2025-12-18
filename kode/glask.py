from flask import Flask
import mysql.connector 

app = Flask(__name__)

@app.route('/')
def root():
    return '<h1>her kommer det html!!!</h1>'

@app.route('/annet')
def annet():
    return '<h1>wow wow</h1>'

if __name__ == '__main__':
    app.run(debug=True)

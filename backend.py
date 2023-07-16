# backend.py (Flask backend)

from flask import Flask, jsonify, request

#from mymodule import generate_number
from random import randint

def generate_number():
    return randint(1, 100)

app = Flask(__name__)

@app.route('/', methods=['POST'])
def generate_number_route():
    data = request.get_json()
    student_name = data.get('studentName')
    generated_number = generate_number()
    print(f"Generated Number: {generated_number}")  # Print the generated number
    return jsonify({'studentName': student_name, 'generatedNumber': generated_number})


@app.route('/home')
def index():
    return "Hello, Flask!"


if __name__ == '__main__':
    app.run()

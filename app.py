from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    historical_price = float(data['historical_price'])
    demand = float(data['demand'])
    rarity = float(data['rarity'])
    seasonality = float(data['seasonality'])

    # Example prediction logic using all parameters
    predicted_price = historical_price * (1 + (demand * 0.1) + (rarity * 0.2) + (seasonality * 0.05))
    
    return jsonify({'predicted_price': predicted_price})

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

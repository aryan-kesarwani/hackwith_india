from flask import Flask, request
import app as a


app = Flask(__name__)

app.secret_key = "UWUWUWUWUWU"
app.debug = True


@app.route("/")
def index():
    return "OK"


@app.route("/check", methods=["POST"])
def check():
    data = request.get_json(force=True)
    ch = data["new"]
    if ch == 1:
        output = a.predict()
    
    return output
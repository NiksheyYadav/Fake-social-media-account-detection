from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def report_form():
    if request.method == "POST":
        name = request.form.get("name")
        profile_url = request.form.get("profileURL")

        # Add your logic to analyze the profile URL here.
        # This is a placeholder:
        if "fake" in profile_url.lower():
            result = "The profile appears to be fake."
        else:
            result = "The profile could not be verified as fake."

        return jsonify({"name": name, "result": result})

    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)

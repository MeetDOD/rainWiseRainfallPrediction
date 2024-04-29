from flask import Flask, request, jsonify
import pickle
import sklearn
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


MP = pickle.load(open("allStatePickleFile/mp_decesion_tree_model.pkl", 'rb'))
TN = pickle.load(open("allStatePickleFile/tn_decesion_tree_model.pkl", 'rb'))
RJ = pickle.load(open("allStatePickleFile/rj_decesion_tree_model.pkl", 'rb'))
KR = pickle.load(open("allStatePickleFile/kr_decesion_tree_model.pkl", 'rb'))
RY = pickle.load(open("allStatePickleFile/ry_decesion_tree_model.pkl", 'rb'))
TL = pickle.load(open("allStatePickleFile/tl_decesion_tree_model.pkl", 'rb'))
AP = pickle.load(open("allStatePickleFile/ap_decesion_tree_model.pkl", 'rb'))
CG = pickle.load(open("allStatePickleFile/cg_decesion_tree_model.pkl", 'rb'))
VD = pickle.load(open("allStatePickleFile/vd_decesion_tree_model.pkl", 'rb'))
MH = pickle.load(open("allStatePickleFile/mh_decesion_tree_model.pkl", 'rb'))
GOA = pickle.load(open("allStatePickleFile/goa_decesion_tree_model.pkl", 'rb'))
SUR = pickle.load(open("allStatePickleFile/sur_decesion_tree_model.pkl", 'rb'))
GUJ = pickle.load(open("allStatePickleFile/guj_decesion_tree_model.pkl", 'rb'))
KL = pickle.load(open("allStatePickleFile/kl_decesion_tree_model.pkl", 'rb'))
JK = pickle.load(open("allStatePickleFile/jk_decesion_tree_model.pkl", 'rb'))
HP = pickle.load(open("allStatePickleFile/hp_decesion_tree_model.pkl", 'rb'))
PB = pickle.load(open("allStatePickleFile/pb_decesion_tree_model.pkl", 'rb'))
DL = pickle.load(open("allStatePickleFile/dl_decesion_tree_model.pkl", 'rb'))
UR = pickle.load(open("allStatePickleFile/ur_decesion_tree_model.pkl", 'rb'))
BI = pickle.load(open("allStatePickleFile/bi_decesion_tree_model.pkl", 'rb'))
JR = pickle.load(open("allStatePickleFile/jr_decesion_tree_model.pkl", 'rb'))
OR = pickle.load(open("allStatePickleFile/or_decesion_tree_model.pkl", 'rb'))
WB = pickle.load(open("allStatePickleFile/wb_decesion_tree_model.pkl", 'rb'))
ASS = pickle.load(open("allStatePickleFile/ass_decesion_tree_model.pkl", 'rb'))
LD = pickle.load(open("allStatePickleFile/ld_decesion_tree_model.pkl", 'rb'))
ANNI = pickle.load(open("allStatePickleFile/anni_decesion_tree_model.pkl", 'rb'))
ARP = pickle.load(open("allStatePickleFile/arp_decesion_tree_model.pkl", 'rb'))

@app.route('/')
def index():
    return "Hello, World!, This is the API for Rainfall Prediction Model in Machine Learning"

@app.route('/predict_tn', methods=['POST'])
def predict_tn():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = TN.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Tamil Nadu is ": res})

@app.route('/predict_mp', methods=['POST'])
def predict_mp():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = MP.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Madhya Pradesh is ": res})
    
@app.route('/predict_rj', methods=['POST'])
def predict_rj():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = RJ.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Rajasthan  is ": res})
    
@app.route('/predict_kr', methods=['POST'])
def predict_kr():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = KR.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Kerala is ": res})
    
@app.route('/predict_ry', methods=['POST'])
def predict_ry():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = RY.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Rayalaseema is ": res})
    
@app.route('/predict_tl', methods=['POST'])
def predict_tl():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = TL.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Telangana is ": res})
    
@app.route('/predict_ap', methods=['POST'])
def predict_ap():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = AP.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Andhra Pradesh is ": res})
    
@app.route('/predict_cg', methods=['POST'])
def predict_cg():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = CG.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Chhattisgarh is ": res})
    
@app.route('/predict_vd', methods=['POST'])
def predict_vd():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = VD.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Vidarbha is ": res})
    
@app.route('/predict_mh', methods=['POST'])
def predict_mh():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = MH.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Maharashtra is ": res})

@app.route('/predict_goa', methods=['POST'])
def predict_goa():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = GOA.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for GOA is ": res})

@app.route('/predict_sur', methods=['POST'])
def predict_sur():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = SUR.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for saurashtra and kutch is ": res})
    
@app.route('/predict_guj', methods=['POST'])
def predict_guj():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = GUJ.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Gujarat is ": res})

@app.route('/predict_kl', methods=['POST'])
def predict_kl():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = KL.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Kerala is ": res})

@app.route('/predict_jk', methods=['POST'])
def predict_jk():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = JK.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for jammu and kashmir is ": res})

@app.route('/predict_hp', methods=['POST'])
def predict_hp():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = HP.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for himachal pradesh is ": res})

@app.route('/predict_pb', methods=['POST'])
def predict_pb():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = PB.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Punjab is ": res})
    
@app.route('/predict_dl', methods=['POST'])
def predict_dl():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = DL.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for Delhi is ": res})
    
@app.route('/predict_ur', methods=['POST'])
def predict_ur():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = UR.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for uttarakhand is ": res})
    
@app.route('/predict_bi', methods=['POST'])
def predict_bi():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = BI.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for bihar is ": res})
    
@app.route('/predict_jr', methods=['POST'])
def predict_jr():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = JR.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for jharkhand is ": res})
    
@app.route('/predict_or', methods=['POST'])
def predict_or():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = OR.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for orissa is ": res})
    
@app.route('/predict_wb', methods=['POST'])
def predict_wb():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = WB.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for West Bengal is ": res})
    
@app.route('/predict_ass', methods=['POST'])
def predict_ass():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = ASS.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for assam and meghalaya is ": res})
    
@app.route('/predict_ld', methods=['POST'])
def predict_ld():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = LD.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for lakshadweep is ": res})
    
@app.route('/predict_anni', methods=['POST'])
def predict_anni():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = ANNI.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for andaman and nicobar islands is ": res})
    
@app.route('/predict_arp', methods=['POST'])
def predict_arp():
    if request.method == "POST":
        data = request.get_json() 
        Year = int(data['Year'])
        Month = int(data['Month'])
        predicted_rainfall = ARP.predict([[Year, Month]])[0]
        res = round(predicted_rainfall, 2)
        return jsonify({"Predicted Rainfall for arunachal pradesh is ": res})

if __name__ == '__main__':  
   app.run()
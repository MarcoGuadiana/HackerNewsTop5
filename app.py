from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app) 

@app.route('/top-stories', methods=['GET'])
def get_top_stories():
    
    id_url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    id_response = requests.get(id_url)
    print( f"ID RESPONSE = {id_response}", flush=True)
    if id_response.status_code != 200:
        return jsonify({"error": "Failed to fetch IDs"}), 500

    story_ids = id_response.json()[:5] 
    results = []

    
    for story_id in story_ids:
        item_url = f'https://hacker-news.firebaseio.com/v0/item/{story_id}.json?print=pretty'
        item_res = requests.get(item_url)
        #47034713
        
        if item_res.status_code == 200:
            item_data = item_res.json()
            
           
            results.append({
                "id": item_data.get('id'),
                "title": item_data.get('title', 'No Title'),
                "text": item_data.get('text', ''), # Some stories have no text
                "url": item_data.get('url', '')
            })

    return jsonify(results)

if __name__ == '__main__':
    #  http://127.0.0.1:5000
    app.run(debug=False)



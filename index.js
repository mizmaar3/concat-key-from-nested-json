const jsonData = {
    "general": {
        "betStatus": {
            "won": "WON1",
            "lost": "LOST1",
            "live": {
                "score": "Score1",
                "points": "Points1"
            }
        },
        "add": "Add1",
        "close": "Close1",
        "logIn": "Log in1",
        "suspended": "Suspended1",
        "open": "Open1",
        "loadMore": "Load more1"
    },
    "test2": {
        "button_1": "btn1",
        "button_2": "btn2"
    }
};


const getKeys = object => {
    const iter = (o, p) => {
        if (Array.isArray(o)) {
            return;
        }
        if (o && typeof o === 'object') {
            const keys = Object.keys(o);
            if (keys.length) {
                keys.forEach(k => iter(o[k], p.concat(k)));
            }
            return;
        }
        const concatKey = p.join('.');
        result[concatKey] = eval("jsonData." + concatKey);
    }
    const result = {};
    iter(object, []);
    return result;
};

console.log(getKeys(jsonData));



/** 
* console logs
{ 
  'general.betStatus.won': 'WON1',
  'general.betStatus.lost': 'LOST1',
  'general.betStatus.live.score': 'Score1',
  'general.betStatus.live.points': 'Points1',
  'general.add': 'Add1',
  'general.close': 'Close1',
  'general.logIn': 'Log in1',
  'general.suspended': 'Suspended1',
  'general.open': 'Open1',
  'general.loadMore': 'Load more1',
  'test2.button_1': 'btn1',
  'test2.button_2': 'btn2' 
}
**/

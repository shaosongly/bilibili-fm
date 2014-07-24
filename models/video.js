var mongodb = require('./db');

function Video(video) {
    this._id = video._id;
    this.title = video.title;
    this.subtitle = video.subtitle;
    this.des = video.des;
    this.img = video.img;
    this.href = video.href;
    this.up = video.up;//作者
    this.tg = video.tg;//时间戳
    this.len = video.len;//长度
    this.tag = video.tag;//标签列表
};

module.exports = Video;

Video.getAll = function(tag, callback) {
    mongodb.open(function(err, db) {
        if(err) {
            return callback(err);
        }
        db.collection('videos', function(err, collection) {
            if(err) {
                mongodb.close();
                return callback(err);
            }
            var query = {};
            if(tag) {
                query.tag = tag;
            }
            collection.find(query).sort({title: 1}).limit(50).toArray(function(err, videos) {
                mongodb.close();
                if(err) {
                    return callback(err);
                }
                callback(null, videos);
            });
        });
    });
};



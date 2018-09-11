-- Seeds for Users

INSERT INTO users (fisrt_name, last_name, email, password, preference_money, preference_time) 
    VALUES  ("Mike", "Smith", "mike@ms.com", "123booM", 0, 1), 
            ("Nick", "Johnson", "nick@nj.com", "456Boom", 0, 1),
            ("Maria", "Adams", "maria@ma.com", "789KaBoom", 1, 0);


-- Seeds for History
INSERT INTO history (users_id, categroy, org_name, org_link) 
    VALUES  ("1", "nature", "plant a tree", "plantatreetoday.org"), 
            ("2", "education", "Big Brothers Big Sisters of America", "www.bbbs.org");
            
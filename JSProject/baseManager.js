const baseManager = {

    
    get: async (url) => {

        let list = [];

        await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            list = data;
        });

        return list;

    },

    post: async (url, postData) => {

        let entity = {}

        await fetch(url) 

        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(postData)
        }

        await fetch(url, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            entity = data;
        });

        return entity;
    }
}
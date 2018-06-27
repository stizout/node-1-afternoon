const array = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body
        let newMessage = {
            id: id,
            text: text,
            time: time
        }
        array.push(newMessage);
        id++
        res.json(array)
    },
    read: (req, res) => {
        res.json(array);
    },
    update: (req, res) => {
        const { text, time } = req.body
        const { id } = req.params
        let index = 0
        for(let i = 0; i < array.length; i++) {
            if(array.id === Number(id)) {
                index = i
            }
        }
        array[index] = {
            id: array[index].id,
            text: text || array[index].text,
            time: time || array[index].time
        }
        res.json(array)
    },
    delete: (req, res) => {
        const { id } = req.body
        let index = 0;
        for(let i = 0; i < array.length; i++) {
            if(array.id === Number(id)) index = i
        }
        array.splice(index,1);
        res.json(array);
    }
}
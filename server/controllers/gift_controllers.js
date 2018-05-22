let gifts = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { name, price } = req.body;
        gifts.push({ id, name, price });
        id++;
        res.status(200).send(gifts)

    },
    read: (req, res) => {
        res.status(200).send(gifts);

    },
    update: (req, res) => {
        const id = req.params.id;
        const { name, price } = req.body;

        var giftIndex = gifts.findIndex((gift) => {
            return gift.id === parseInt(id);
        });

        gifts[giftIndex].name = name;
        gifts[giftIndex].price = price;

        res.status(200).send(gifts);
    },
    delete: (req, res) => {
        const id = req.params.id;
        var giftIndex = gifts.findIndex((gift) => {
            return gift.id == id;

        })
        gifts.splice(giftIndex, 1);
        res.status(200).send(gifts);
    }
}


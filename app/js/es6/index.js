fetch('https://api.github.com/search/repositories?q=javascript+language:javascript&sort=stars&order=desc')
    .then((receivedData) => {
        return receivedData.json()
    })
    .then((data) => {
        let topThree = {
            items: []
        };

        topThree.items.push(data.items[0]);
        topThree.items.push(data.items[1]);
        topThree.items.push(data.items[2]);
        console.log(topThree)
        fetch('./hand.hbs')
            .then((receivedData) => {
                return receivedData.text()
            })
            .then((handlebarData) => {
                let hbsTemplate = Handlebars.compile(handlebarData);

                var topThreeHandlebar = hbsTemplate(topThree)
                document.querySelector('.display-top-three').innerHTML = topThreeHandlebar
            })
    });
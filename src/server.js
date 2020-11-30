const axios = require('axios');
const token = 'BQCxcgN-WOuFScm-Gji4IYn7soNtXfs0Jnd9MtEb4sK0--qTpgLzFAh60VsMLRqkS754GWxW-ZYaE7AJgzvGo8Ycf21K2RVGKKYNl75Mf-yY1UF2Y2UFV5EgjLxPAyy5IwNqKJFoEFaaU4j8hXzkO7K_cEgg0N_H62_6jzKzqSiShZzM08JV6Hn2wcTxD_9Jy73IiW0Hqww1iSvcEzeVLhnw3zdx4345Rs5MXZ1kpLgYJ8viE_vgCeQUCO7GxmJltGY2PuJaua4hNvJm2R-viKh1'

axios.get(
    'https://api.spotify.com/v1/playlists/3ovwif0es1dUTlWE9OvN5Q', {
        headers: {
            'Authorization' : `bearer ${token}`,
        }
    }
)

app.listen(3333);
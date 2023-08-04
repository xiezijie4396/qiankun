const isDev = !(process.env.NODE_ENV === 'production')

const list = [
    {
        name: 'default app', // app name registered
        proEntry: `/main/defalut`,
        devEntry: `//localhost:8080`,
        container: '#default',
        activeRule: '/default',
        entry: '',
    },
    {
        name: 'vue2 app', // app name registered
        proEntry: `/main/vue2`,
        devEntry: `//localhost:8001`,
        container: '#vue2',
        activeRule: '/main/vue2/',
        entry: '',
    },
    // {
    //     name: 'vue3 app', // app name registered
    //     proEntry: `/main/vue3`,
    //     devEntry: `//localhost:8002`,
    //     container: '#vue3',
    //     activeRule: '/main/vue3',
    //     entry: '',
    // },
    // {
    //     name: 'react app', // app name registered
    //     proEntry: `/main/react`,
    //     devEntry: `//localhost:8003`,
    //     container: '#react',
    //     activeRule: '/main/react',
    //     entry: '',
    // },
    // {
    //     name: 'vue2hash app', // app name registered
    //     proEntry: `/main/vue2hash`,
    //     devEntry: `//localhost:8010`,
    //     container: '#vue2hash',
    //     activeRule: '/main/vue2hash',
    //     entry: '',
    // },
    // {
    //     name: 'vue3hash app', // app name registered
    //     proEntry: `/main/vue3hash`,
    //     devEntry: '//localhost:8011',
    //     container: '#vue3hash',
    //     activeRule: '/main/vue3hash',
    //     entry: '',
    // }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getRegisterApp(): any {
    return list.map(item => {
        item.entry = isDev ? item.devEntry : item.proEntry
        return item
    })
}
const isDev = !(process.env.NODE_ENV === 'production')

const list = [
    // {
    //     name: '/main/defalut/', // app name registered
    //     // eslint-disable-next-line
    //     activeRule: (location: any) => {
    //         return location.pathname === '/main/default/'
    //     },
    //     devEntry: `//localhost:8099`,
    //     container: '#container',
    //     props: {
    //         devEntry: `//localhost:8001/child/vue2/`,
    //         proEntry: `/child/vue2/`,
    //         activeRule: '/main/vue2/'
    //     }
    // },
    {
        name: 'default', // app name registered
        container: '#container',
        // eslint-disable-next-line
        activeRule: (location: any) => {
            return location.pathname === '/main/default/'
        },
        props: {
            devEntry: `//localhost:8012/child/default/`,
            proEntry: `/child/default/`,
            activeRule: '/main/default'
        }
    },
    {
        name: 'vue2-app', // app name registered
        container: '#container',
        props: {
            devEntry: `//localhost:8001/child/vue2/`,
            proEntry: `/child/vue2/`,
            activeRule: '/main/vue2'
        }
    },
    {
        name: 'vue3-app', // app name registered
        container: '#container',
        props: {
            devEntry: `//localhost:8002/child/vue3/`,
            proEntry: `/child/vue3/`,
            activeRule: '/main/vue3'
        }
    },
    {
        name: 'react-app', // app name registered
        container: '#container',
        props: {
            devEntry: `//localhost:8003/child/react/`,
            proEntry: `/child/react/`,
            activeRule: '/main/react'
        }
    },
    {
        name: 'vue2hash-app', // app name registered
        container: '#container',
        props: {
            devEntry: `//localhost:8010/child/vue2hash/`,
            proEntry: `/child/vue2hash/`,
            activeRule: '/main/vue2hash'
        }
    },
    {
        name: 'vue3hash-app', // app name registered
        container: '#container',
        props: {
            devEntry: `//localhost:8011/child/vue3hash/`,
            proEntry: `/child/vue3hash/`,
            activeRule: '/main/vue3hash'
        }
    },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getRegisterApp(): any {
    // eslint-disable-next-line
    return list.map((item: any) => {
        item.entry = isDev ? item.props.devEntry : item.props.proEntry
        if (!item.activeRule) {
            item.activeRule = item.props.activeRule
        }
        return item
    })
}
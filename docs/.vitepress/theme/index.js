import MyLayout from "./myLayout.vue"
import './styles.scss'
import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,
    Layout: MyLayout ,
    NotFound: () => "custom 404",
    // enhanceApp({ app,router,siteData})
}

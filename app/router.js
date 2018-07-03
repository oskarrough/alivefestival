import EmberRouter from '@ember/routing/router'
import RouterScroll from 'ember-router-scroll'
import config from './config/environment'
import googlePageview from './mixins/google-pageview'

const Router = EmberRouter.extend(googlePageview, RouterScroll, {
    location: config.locationType,
    rootURL: config.rootURL
})

Router.map(function() {
    // Program, music etc.
    this.route('program', function() {
      this.route('artist', {path: ':artist_slug'})
    });
    // this.route('music', {path: 'musik'}, function() {
    //   this.route('artist', {path: ':artist_slug'})
    // })
    this.route('sideprogram')
    this.route('adventure', {path: 'dagsprogram'})
    this.route('schedule', {path: 'spilleplan'})

    // News
    this.route('news', {path: 'nyheder'}, function() {
        this.route('post', {path: ':post_slug'})
    })

    // Meta pages
    this.route('tickets', {path: 'billetter'})
    this.route('volunteer', {path: 'frivillig'})
    this.route('practical', {path: 'praktisk'})
    this.route('about', {path: 'om-alive'}, function() {
        this.route('contact', {path: 'kontakt'})
        this.route('history', {path: 'historie'})
    })
    this.route('partners', {path: 'partnere'})
    this.route('english')
    this.route('memory', {path: 'lykkehjulet'})

    // 404
    this.route('404', {path: '/*wildcard'})
})

export default Router

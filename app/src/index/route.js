import Ember from 'ember';
import UnauthenticatedRouteMixin from 'book-share/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
    setupController(controller, model) {
        this.controllerFor('application').set('hideNavBar', true);
    },

    deactivate() {
        this.controllerFor('application').set('hideNavBar', false);
    }
});

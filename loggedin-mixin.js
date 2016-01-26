/* global LoggedInMixin:true */
LoggedInMixin = function(methodOptions) {
    check(methodOptions.checkLoggedInError, Match.ObjectIncluding({
        code: String,
        message: String,
        reason: String
    }));
    const runFunc = methodOptions.run;
    methodOptions.run = function() {
        if (!this.userId) {
            throw new Meteor.Error(...methodOptions.checkLoggedInError);
        };
        return runFunc(...arguments);
    }
    return methodOptions;
}
M.AddCssClass = M.Interface.design(/** @scope M.Interface.prototype */{

    /**
     * The type of this object.
     *
     * @type String
     */
    _type: 'M.AddCssClass',

    _addCssClass: function(context){
        if(context.classes){
            context._internalCssClasses += ' ' + context.classes;
        } else {

        }

    },
    /**
     *
     * @param context
     * @returns {{registerActiveState: *}}
     * @override
     */
    getInterface: function( context ) {
        return {
            /* Call the function at the creation time to add the events when the element is initialized */
            registerAddCssClassInterface: this._addCssClass(context)
        };
    }

});
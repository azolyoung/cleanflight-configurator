'use strict;'

var OpenTCOCamFeatures = function (config) {
    var self = this;

    var available_features = [
        {bit: 0, name: 'SIMULATE_POWER_BUTTON'},
        {bit: 1, name: 'SIMULATE_WIFI_BUTTON'},
        {bit: 2, name: 'CHANGE_MODE'},
    ];

    self._available_features = available_features;
    self._supportedFeatureMask = 0;
}

OpenTCOCamFeatures.prototype.getMask = function () {
    var self = this;

    return self._supportedFeatureMask;
};

OpenTCOCamFeatures.prototype.setMask = function (featureMask) {
    var self = this;

    self._supportedFeatureMask = featureMask;
};

OpenTCOCamFeatures.prototype.isEnabled = function (featureName) {
    var self = this;

    for (var i = 0; i < self._available_features.length; i++) {
        if (self._available_features[i].name === featureName && bit_check(self._supportedFeatureMask, self._available_features[i].bit)) {
            return true;
        }
    }
    return false;
};
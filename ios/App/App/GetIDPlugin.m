#import <Capacitor/Capacitor.h>

CAP_PLUGIN(GetIDPlugin, "GetID",
    CAP_PLUGIN_METHOD(startVerificationFlow, CAPPluginReturnPromise);
)

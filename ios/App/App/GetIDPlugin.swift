import Capacitor
import GetID

@objc(GetIDPlugin)
public class GetIDPlugin: CAPPlugin {
    private var call: CAPPluginCall?

    @objc func startVerificationFlow(_ call: CAPPluginCall) {
        guard
            let input = call.getObject("input"),
            let apiUrl = input["apiUrl"] as? String,
            let token = input["token"] as? String,
            let flowName = input["flowName"] as? String
        else {
            call.resolve(["GetIDEvent": "invalidInput"])
            return
        }
        self.call = call

        DispatchQueue.main.async {
            GetIDSDK.startVerificationFlow(
                apiUrl: apiUrl,
                auth: .jwt(token),
                flowName: flowName
            )
            call.resolve(["GetIDEvent": "startVerificationFlow"])
        }
    }
}

package ee.getid.ionic;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.sdk.getidlib.config.GetIDSDK;
import com.sdk.getidlib.model.app.auth.Token;

@CapacitorPlugin(name = "GetID")
public class GetIDPlugin extends Plugin {

  @PluginMethod()
  public void startVerificationFlow(PluginCall call) {
    JSObject input = call.getObject("input");
    String apiUrl = input.getString("apiUrl");
    String token = input.getString("token");
    String flowName = input.getString("flowName");

    JSObject result = new JSObject();

    if (apiUrl == null || token == null || flowName == null) {
      result.put("GetIDEvent", "invalidInput");
      call.resolve(result);
      return;
    }

    new GetIDSDK().startVerificationFlow(
      getContext(),
      apiUrl,
      new Token(token),
      flowName,
      null,
      null,
      null,
      null
    );

    result.put("GetIDEvent", "startVerificationFlow");
    call.resolve(result);
  }
}

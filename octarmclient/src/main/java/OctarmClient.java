import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.CountDownLatch;

/**
 * Created by RMSLabPC on 5/10/2016.
 */
public class OctarmClient {

    static Socket socket;
    public static String matlabHostname = "localhost";
    public static int matlabPort = 6000;

    private final CountDownLatch exitLatch;

    public static void main(String[] args){
        System.out.println("Java Client Started");
        try{
            new OctarmClient();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

    public OctarmClient() throws Exception{
        setupConnection();
        socket.connect();
        while (!socket.connected()){ }
 //       restartServer();

        exitLatch = new CountDownLatch(1);

        try{
            exitLatch.await();
        } catch (InterruptedException e){
            e.printStackTrace();
        }

        System.out.println("shutdown");
        socket.disconnect();
        while (socket.connected()){}
        socket.off();


    }

    public void setupConnection() throws URISyntaxException {


        socket = IO.socket("http://localhost:3000");
        System.out.println("setup connection");

        socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {
            public void call(Object... objects) {
                socket.emit("connection", "hi");
                System.out.println("Socket Connected");

            }
        });

        socket.on(Socket.EVENT_DISCONNECT, new Emitter.Listener() {
            public void call(Object... objects) {
                System.out.println("Socket Disconnected");
            }
        });

        socket.on(Socket.EVENT_ERROR, new Emitter.Listener() {
            public void call(Object... objects) {
                System.out.println("socket error");
            }
        });

        socket.on("message", new Emitter.Listener() {
            public void call(Object... objects) {
                try{
                    JSONObject jsonData = new JSONObject(objects[0].toString());
                    JSONArray paramArray = jsonData.getJSONArray("params");
                    float[] paramData = new float[9];
                    if(paramArray !=null) {
                        for (int i = 0; i < paramArray.length(); i++) {
                            JSONObject param = paramArray.getJSONObject(i);
                            paramData[i] = Float.parseFloat(param.getString(JSONObject.getNames(param)[0]));
                            //System.out.println(paramData[i]);

                        }

                        float[] vals =  new Conversion().convert(paramData);
                        for (int i = 0; i < vals.length; i++) {
                            System.out.println(vals[i]);
                        }
                        Quanser Q8 = new Quanser();
                        Q8.connectWrite(vals);

                    }

                } catch (JSONException e){
                    e.printStackTrace();
                }

              // System.out.println(objects[0].toString());


                // connect to matlab send data...

            }
        });
    }

    public void restartServer(){
        socket.emit("status", "disconnected");
        socket.emit("status", "received");
        System.out.println("Server Restarted");
    }

}

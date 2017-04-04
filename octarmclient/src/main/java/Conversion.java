/**
 * Created by rscott on 6/21/2016.
 */
public class Conversion {

    // INPUTS
    // Base: s1, k1, phi1
    // Mid: s2, k2, phi2
    // Tip: s3, k3, phi3

    //// OUTPUTS
    // Base: l1b, l2b, l3b
    // Mid: l1m, l2m, l3m
    // Tip: l1t, l2t, l3t

    //// CONSTANTS USED
    // Base
    float pi = (float) Math.PI;
    float db = 27.5f / (2 * pi);
    // Mid
    float dm = 27.5f / (2 * pi);
    // Tip
    float dt = 23.58f / (2 * pi);

    int n = 7;

    public float[] convert(float[] params) {

        float s1 = params[0];
        float k1 = params[1]*0.0254f;
        float phi1 = params[2];
        float s2 = params[3];
        float k2 = params[4]*0.0254f;
        float phi2 = params[5];
        float s3 = params[6];
        float k3 = params[7]*0.0254f;
        float phi3 = params[8];



        //// S K PHI TO L1 L2 L3 CONVERSION

        // Base
        float l1b = 2 * n * (float)Math.sin(s1 * k1 / (2 * n)) * ((1 / k1) - (db * (float)Math.sin(phi1)));
        float l2b = 2 * n * (float)Math.sin(s1 * k1 / (2 * n)) * ((1 / k1) + (db * (float)Math.sin((pi / 3) + phi1)));
        float l3b = 2 * n * (float)Math.sin(s1 * k1 / (2 * n)) * ((1 / k1) - (db * (float)Math.cos((pi / 6) + phi1)));

        // Mid
        float l1m = 2 * n * (float)Math.sin(s2 * k2 / (2 * n)) * ((1 / k2) - (dm * (float)Math.sin(phi2)));
        float l2m = 2 * n * (float)Math.sin(s2 * k2 / (2 * n)) * ((1 / k2) + (dm * (float)Math.sin((pi / 3) + phi2)));
        float l3m = 2 * n * (float)Math.sin(s2 * k2 / (2 * n)) * ((1 / k2) - (dm * (float)Math.cos((pi / 6) + phi2)));

        // Tip
        // l1t = s3 - (s3*k3*dt*(float)Math.sin(phi3));
        // l2t = s3 + (s3*k3*dt*(float)Math.sin((pi/3) + phi3));
        // l3t = s3 - (s3*k3*dt*(float)Math.sin((pi/6) + phi3));

        float l1t = 2 * n * (float)Math.sin(s3 * k3 / (2 * n)) * ((1 / k3) - (dt * (float)Math.sin(phi3)));
        float l2t = 2 * n * (float)Math.sin(s3 * k3 / (2 * n)) * ((1 / k3) + (dt * (float)Math.sin((pi / 3) + phi3)));
        float l3t = 2 * n * (float)Math.sin(s3 * k3 / (2 * n)) * ((1 / k3) - (dt * (float)Math.cos((pi / 6) + phi3)));

        //// L1 L2 L3 TO PRESSURE REGULATOR GAIN CONVERSION

        // sc1t = 51.515*l1t - 17.307;
        float sc1t = 49.312f * l1t - 16.492f;
        // sc2t = 46.487*l2t - 15.273;
        float  sc2t = 46.165f * l2t - 15.156f;
        // sc3t = 48.23*l3t - 16.27;
        float sc3t = 52.034f * l3t - 17.657f;

        // Mid
        // sc1m = 53.458*l1m - 16.344;
        float sc1m = 52.828f * l1m - 16.131f;
        // sc2m = 59.519*l2m - 18.51;
        float sc2m = 58.287f * l2m - 18.091f;
        // sc3m = 56.071*l3m - 17.545;
        float sc3m = 57.692f * l3m - 18.099f;

        // Base
        // sc1b = 61.42*l1b - 19.776;
        float sc1b = 60.046f * l1b - 19.294f;
        // sc2b = 56.309*l2b - 18.072;
        float sc2b = 60.514f * l2b - 19.529f;
        // sc3b = 61.047*l3b - 19.304;
        float sc3b = 59.612f * l3b - 18.81f;

        float[] voltages = {sc1b, sc3b, sc2b, sc1m, sc3m, sc2m, sc1t, sc3t, sc2t };
        return voltages;

    }



}

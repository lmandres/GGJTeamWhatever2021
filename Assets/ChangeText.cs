using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ChangeText : MonoBehaviour
{
    public Canvas myCanvas;

    IEnumerator Start()
    {

        // First, check if user has location service enabled
        if (!Input.location.isEnabledByUser)
        {
            myCanvas.GetComponentsInChildren<Text>()[0].text = "Location not enabled.";
            yield break;
        }

        // Start service before querying location
        Input.location.Start();

        // Enable compass service
        Input.compass.enabled = true;

        // Wait until service initializes
        int maxWait = 20;
        while (Input.location.status == LocationServiceStatus.Initializing && maxWait > 0)
        {
            yield return new WaitForSeconds(1);
            maxWait--;
        }

        // Service didn't initialize in 20 seconds
        if (maxWait < 1)
        {
            myCanvas.GetComponentsInChildren<Text>()[0].text = "Timed out";
            yield break;
        }

        // Connection has failed
        if (Input.location.status == LocationServiceStatus.Failed)
        {
            myCanvas.GetComponentsInChildren<Text>()[0].text = "Unable to determine device location";
            yield break;
        }
        else
        {
            // Access granted and location value could be retrieved
            myCanvas.GetComponentsInChildren<Text>()[0].text = "Lat: " + Input.location.lastData.latitude;
            myCanvas.GetComponentsInChildren<Text>()[1].text = "Lon: " + Input.location.lastData.longitude;
            myCanvas.GetComponentsInChildren<Text>()[2].text = "Loc TS: " + Input.location.lastData.timestamp;
            myCanvas.GetComponentsInChildren<Text>()[3].text = "Hdng: " + Input.compass.trueHeading; 
            myCanvas.GetComponentsInChildren<Text>()[4].text = "Com TS: " + Input.compass.timestamp;
        }

        // Stop service if there is no need to query location updates continuously
        //Input.location.Stop();
    }

    private void Update()
    {
        if (Input.location.status != LocationServiceStatus.Failed)
        {
            // Access granted and location value could be retrieved
            myCanvas.GetComponentsInChildren<Text>()[0].text = "Lat: " + Input.location.lastData.latitude;
            myCanvas.GetComponentsInChildren<Text>()[1].text = "Lon: " + Input.location.lastData.longitude;
            myCanvas.GetComponentsInChildren<Text>()[2].text = "Loc TS: " + Input.location.lastData.timestamp;
            myCanvas.GetComponentsInChildren<Text>()[3].text = "Hdng: " + Input.compass.trueHeading;
            myCanvas.GetComponentsInChildren<Text>()[4].text = "Com TS: " + Input.compass.timestamp;
        }
    }
}
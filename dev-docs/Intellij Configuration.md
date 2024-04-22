<h1>Intellij Setup Instructions</h1>
<p>This document serves are instructions for setup and validation of the project in Intellij IDEA.</p>
<hr>

<h2>Prerequisites</h2>
<ul>
    <li>Download Intellij IDEA from <a href="https://www.jetbrains.com/idea/download/">here</a>.  The community or ultimate edition is acceptable.  
        I am using the ultimate edition, which can be granted for free with a valid educator/student account.</li>
    <li>Launch the setup.exe and follow the installation through to completion.</li>
</ul>
<hr>

<h2>Opening the project</h2>
<ul>
    <li>Launch Intellij IDEA.</li>
    <li>Click on "Open or Import" on the welcome screen.</li>
    <li>Navigate to the root of the project folder (Augustine-Collins) and select open.</li>
    <li>Select "trust project" if a trust warning is present.</li>
</ul>
<hr>

<h2>Module Identification</h2>
<p>This project has two core sub-projects, ReactApplication and FoodAPI.  For ease-of-use, it is best to have IntelliJ recognize these as project modules.</p>
<ul>
    <li>Select the gear icon in the top-right, and select "Project Structure" from the drop-down.</li>
    <il>In the pop-up window, select "modules" on the left-hand side.</il>
    <li>Click the "+" icon in the top-left corner, and select "Import Module".</li>
    <li>Navigate to the ReactApplication directory, and select "add".  When prompted for the build tool, select gradle and continue.</li>
    <li>Repeat the process for the FoodAPI directory, selecting Maven as the build tool.</li>
</ul>
<hr>

<h2>Configuring Tomcat Instance</h2>
<ul>
    <li>At the top right of the Intellij Window, to the left of the large run and debug buttons, there will be a configurations dropdown. Click on the chevron and select "edit configurations" from the dropdown list.</li>
    <li>Click the "+" icon in the top-left corner, and select "Tomcat Server", then "local" from the dropdown list.</li>
    <li>Set the name to whatever you'd like, and the application server to the Tomcat version you have installed.  If you have not installed Tomcat, you can do so from the "plugins" section of the settings menu.</li>
    <li>In the "server" section of the tomcat configuration, deselect the "after launch" option, as this project is just server-side endpoints and has no user interface.</li>
    <li>Also on the "server" page, at the bottom, make sure the "before launch" section has "build", then "build FoodAPI war exploded".  If this is not the case, I would recommend adding these steps in this order. 
This allows a simple, one-click deployment of the war to tomcat.</li>
    <li>In the "deployment" section, click the "+" icon and select "artifact", then select the FoodAPI:war exploded artifact. The application context must be "/FoodAPI_war_exploded" for the client-side urls to work properly.</li>
    <li>Click "apply" and "ok" to save the configuration.</li>
</ul>
<hr>

<h2>Running Tomcat</h2>
<ul>
    <li>Select the Tomcat Instance created previously from the Instances dropdown to the left of the run and debug buttons in the top right of Intellij.</li>
    <li>Select either run or debug, depending on what you wish to do.  This will build, deploy, and launch the war file in tomcat, and start the tomcat instance.  The tomcat output log will also appear in the bottom window of 
    Intellij, filed under the "services" tab located at the bottom left along the left side of the window.</li>
    <li>To stop tomcat, simply click the stop button that has replaced the run button in the top right of Intellij.  Alternatively, you can right-click on the process in the services window and kill the process there.</li>
</ul>
<hr>

<h2>Running React Application</h2>
<ul>
    <li>Open a terminal window in the ReactApplication directory.</li>
    <li>Run the command "npm install" to install all necessary dependencies.</li>
    <li>Run the command "npm start" to start metro.</li>
    <li>Open android studio, and start an emulated android device.</li>
    <li>When the device has started, open a second terminal window, and execute "adb tcp:8080 tcp:8080". This will reverse port 8080 from the emulated device to the Windows system, so tomcat and React can exchange the http requests.</li>
    <li>On the first terminal window (running metro), type a to deploy to android.  After the deploy process, the emulator should auto-launch the React application.</li>
    <li>Be sure to kill the metro process when finished with ctrl + c.  Otherwise, the node process will need to be killed from task manager.  Metro will not start if there is another instance of node running.</li>
</ul>
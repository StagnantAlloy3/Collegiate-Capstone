<h1>Instructions</h1>
<p>This document serves are instructions for setup and validation of the project requirements.</p>
<hr>

<h2>Java Installation and Testing</h2>
<h5><a href="https://docs.oracle.com/en/java/javase/19/index.html">Java Documentation</a></h5>
<h3>Java Installation</h3>
<li>Download the Java 19.0.2 JDK from <a href="https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html">here</a> 
for your specific OS.  I chose the Windows x64 msi installer.</li>
<li>Launch the installer and follow the prompts.  No custom options are necessary.</li>
<li>Add the jdk path to the system variables.  In Windows, under System Properties -> Environment Variables -> System 
Variables, select 'new' if you do not already have a JAVA_HOME variable name, and add "JAVA_HOME" as the variable name and 
the jdk-19.0.2 folder path as the value.  The default java path is: C:\Program Files\Java\jdk-19.0.2. If you already have 
a JAVA_HOME variable, change the value to the path of the 19.0.2 version.</li>
<li>Reboot the system.</li>
<h3>Java Testing</h3>
<li>Open a terminal window and type "java --version".  You should see "java 19.0.2" if the installation was successful.</li>

<h2>Tomcat Installation and Testing</h2>
<h5><a href="https://tomcat.apache.org/tomcat-9.0-doc/index.html">Tomcat Documentation</a></h5>
<h3>Tomcat Installation</h3>
<li>Download tomcat .zip (Core) from <a href="https://tomcat.apache.org/download-90.cgi">here</a> for your specific OS.  
I am specifying version 9.0.85 as this projects version as anything higher than 9.x.x swaps to Jakarta. I also specifically 
chose the "zip" option and not the 32 or 64 bit Windows zip.</li>
<li>Extract the zip and place it in a known directory to reference later.</li>
<h3>Testing Tomcat</h3>
<li>Double click the startup.bat file located in *tomcatinstallfolder*/bin/startup.sh.  You can also launch through 
terminal if desired.</li>
<li>Open a browser and navigate to the default tomcat url: <a href="http://localhost:8080">http://localhost:8080</a></li>
<li>You should be greeted with the default tomcat home page.  If not, tomcat is experiencing issues. Check either the 
terminal or catalina.out log in *tomcatinstallfolder*/logs/catalina.out</li>
<li>Stopping tomcat you can either close the terminal window, or press ctrl + c in the terminal to close the process.</li>
<h3>Building a .war file</h3>
<p>Personally, I use the Intellij smart-deploy feature to build and deploy the .war file to my tomcat instance.  If you are using 
<h3>Deploying a Project to Tomcat</h3>
<li>Copy the .war file to *tomcatinstallfolder*/webapps/</li>
<li>Launch tomcat and navigate to http://localhost:8080/*nameofthewarfile*</li>
<small>There may be Auto-Deploy integration with VS Code like IntelliJ has. If you are using VSC and have the Tomcat for Java extension, there is a
pre-configured command for generating a .war file from the current directory. It is also possible to use the terminal command 
'mvn package' from the root directory of the project (FoodAPI) assuming Maven is configured on the system.</small>
<h3>Troubleshooting</h3>
<li>A port is already in use: Go to the root tomcat folder and navigate to conf and open the server.xml file.  Search for
the occupied port.  Be aware that if you change the deploy port (8080), you may need to alter code in the project to reflect 
the port change.</li>
<hr>

<h2>NodeJS Installation and Testing</h2>
<h5><a href="https://nodejs.org/api/all.html">NodeJS Documentation</a></h5>
<small>Also see the React Native installation section below for details on installing NodeJS</small>
<h3>NodeJS Installation</h3>
<li> The easiest method is downloading the nodeJS .msi file from here: https://nodejs.org/dist/v20.3.0/.  This will 
install specifically version 20.3.0.  This is a minor variant of the LTS edition, and seems to play well with react.</li>
<li>Follow the installation prompts, and reboot the system when finished installing.</li>
<li>To verify successfully instalation: in a terminal window, run the following 'node --version'.  You should see 
'v20.3.0' if the installation was successfully.</li>
<li>Along with nodeJS, the installation will also install npm, a package manager.  The bundled version is 9.6.7.  To verify 
npm was installed correctly, run 'npm --version'.  You should see '9.6.7'.</li>
<hr>

<h2>React Native Installation and Testing</h2>
<h5><a href="https://reactnative.dev/docs/getting-started">React Native Documentation</a></h5>
<small>I referenced <a href="https://reactnative.dev/docs/environment-setup?guide=native">this</a> guide long ago for 
installation. It covers the steps to install all dependencies for React from a fresh Windows installation.</small>

<h3>React Native Installation</h3>
<p>I have had android studio and react setup for some time now, so I don't remember all the setup exactly. It does 
require android studio for the emulated android device, which the guide linked above covers.
<b>SKIP the "create a new application" portion.</b> Instead, clone and open the template project in VSC.
Additionally, after launching the project in your editor of choice, open a terminal window in the ReactApplication directory and run
the command 'npm install'.  This will install the required node modules for this project that are not included in the 
repo. Without this, the project will not launch and other node oddities may occur. (IntelliJ or any of the JetBrains 
IDE's will auto-install the packages when the project is detected as a module.)</p>

<h3>React Native Testing</h3>
<li>With the project open, in the root directory of the React portion of the project, open terminal and type "npm 
start".</li>
<small>If you receive an error stating 'react-native' is not recognized as an internal or external command, operable 
program or batch file', you need to either: Add npm to the PATH in system properties -> environment variables -> system variables: 
C:\Users[USER-NAME]\AppData\Roaming\npm (or wherever your npm instance is from root) OR Globally install the react cli 
with: npm install -g react-native-cli from cmd/terminal.</small>
<li>This will start the metro server used to run the application. From there, use "a" to launch on Android.</li>
<li>The virtual device you set up earlier should launch and install the apk.  This may take some time on first compile.</li>
<li>Verify that the application launches on the virtual device.</li>

<h3>Troubleshooting</h3>
<li>error listen EADDRINUSE: address already in use :::8081 - A prior instance of metro was not shutdown properly, or another 
process is occupying 8081.  To verify if node is the issue, open task manager on windows (or equivalent) and search for a node.js 
task. Kill the task from task manager, and run the start command again.  If the issue persists, check in resource manager for port 
usage.</li>
<hr>
<hr>

<h2>MongoDB Installation and Testing</h2>
<h5><a href="https://www.mongodb.com/docs/">MongoDB Documentation</a></h5>
<h3>MongoDB Installation</h3>
<li>Download the MongoDB install media <a href="https://www.mongodb.com/try/download/community">here</a>.</li>
<small>We will use community v7.0.5 as this is the current version.</small>
<li>Launch the installer, choose "complete" install, and proceed with the default selections. Install the GUI if 
preferred. (recommended)</li>
<h3>MongoDB Testing</h3>
<li>When compass (the GUI) loads, select the default connectionURL and click connect.</li>
<li>To verify the DB is working correctly, run the following commands in the MONGOSH console at the bottom of compass</li>

>db.createCollection("Test")
>
>db.Test.insertOne({"name":"test","data":"test"})

<li>This generated a collection titled "Test" and an object with a name and date field both with the value of "test".  
If this data shows in compass after executing the command, the DB is working as intended.</li>
<small>IntelliJ has built-in database integration with a query console.  VS Code may have a similar feature, but I'm not 
sure. I will update if I find similar functionality in VSC.</small>

<h3>Uploading Dataset into MongoDB</h3>
<li>Download the complete dataset from <a href="https://fdc.nal.usda.gov/fdc-datasets/FoodData_Central_csv_2023-10-26.zip">here</a>.</li>
<li>Extract the zip file to a known location.</li>
<li>Open the MongoDB Compass GUI and connect to the default connection URL.</li>
<li>Create a Database in MongoDB and title it "Foods".</li>
<li>Create a collection under foods with the name "Branded_Foods"</li>
<li>Select Add Data -> Import from CSV.</li>
<li>In the dataset downloaded, there will be a branded_food.csv file.  Upload this to MongoDB, leaving the original column names.</li>
<li>Create a new Collection titled "Food"</li>
<li>Upload the food.csv file to the "Food" collection, leaving the original column names.</li>
<hr>

<h2>Postman Installation and Testing</h2>
<h5><a href="https://learning.postman.com/docs/getting-started/introduction/">Postman Documentation</a></h5>
<p>I will also be using Postman to test my RESTApi endpoints to enable decoupled development between the client and 
server side. It is not strictly necessary, but it makes endpoint testing much faster and easier.</p>
<h3>Postman Installation</h3>
<li>Download the Postman install media <a href="https://www.postman.com/downloads/">here</a>.</li>
<li>Simply follow the installation prompts.  No custom edits are required.</li>
<h3>Postman Testing</h3>
<li>Start tomcat and in postman create a get request with the default tomcat url: http://localhost:8080.  You should 
receive the tomcat welcome page in the "preview" portion of postman.</li>
<hr>

<h2>IntelliJ Installation and Testing (Optional)</h2>
<h5><a href="https://www.jetbrains.com/help/idea/getting-started.html">IntelliJ Documentation</a></h5>

<h3>IntelliJ Installation</h3>
<small>A detailed installation guide can be found <a href="https://www.jetbrains.com/help/idea/installation-guide.html#standalone">
here</a>. I would recommend installing the standalone version and not using the toolbox unless you wish to use other JetBrains IDEs/Products.</small>
<li>Download the installation media <a href="https://www.jetbrains.com/idea/download/?section=windows">here</a>.</li>

<h3>IntelliJ Testing</h3>
<li>Launch IntelliJ</li>
<li>In the top right of the launcher, there will be a "Clone from VSC" button.  Click on that.</li>
<li>In the next menu, select "Repository URL" from the left menu.</li>
<li>Paste the clone link found on the GitHub project by clicking on the green "code" button.</li>
<li>Click "clone" and wait for the project to clone.</li>
<li>Once the project is cloned, IntelliJ will prompt you to trust the project and open.  Click "Trust Project and Open".</li>
<li>Once the project opens successfully, navigate to "Project Structure" under the settings cog on the top right of the editor.</li>
<li>In Project Settings -> Project Structure there will be an SDK option.  Select your JRE, if one is available.  If one 
is not available, select "Download" and choose a Java 19 jre. I am personally using the Amazon variant.</li>
<hr>

<h3>VSCode Installation and Testing</h3>
<p>I haven't gotten this far yet, but putting here as a placeholder for circling back.  Will update when I install VCS 
and get it configured.</p>

<hr>

<h3>Android Port Forwarding (Emulator and Physical Device)</h3>
<p>To enable the endpoint integration with the react application, you will need to enable port forwarding from the android device to your PC/mac.  To do this:
<li>Open a new terminal window.</li>
<li>Type 'adb devices'. This will show a list of connected android devices with USB-debugging.</li>
<li>Type 'adb -s *DEVICE NAME AS LISTED* reverse tcp:*tomcat port number* tcp:*tomcatportnumber*'.For me, that command looked 
like this: 'adb -s emulator-554 reverse tcp:8080 tcp:8080'.</li>
This will enable the phone or emulated decide to route through the computers port, instead of using its own.  Without doing 
this, you will receive network errors with all the endpoint functionality.  This process will need to be done each time the device is disconnected from the host computer. :(</p>

<hr>

<h2>Packages</h2>
<small>Will come as added to project. For now, just boilerplate React Native project and java REST API are used.</small>
<hr>

<small>
    <p>Author: Augustine Collins - Capstone 2024</p>
</small>
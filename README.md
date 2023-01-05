<p>
  <img src="https://cyberuslabs.com/wp-content/uploads/2015/09/cl_new_logo-e1553199321586.png" alt="Cyberus Key logo">
</p>

# What is Cyberus Key?

Your users will never need to remember or input a password again with Cyberus Key, our one-touch
universal, user authentication system.

Now you can guarantee your customers the highest level of protection against phishing attacks, identity and data theft,and more. By removing the risk
of stolen passwords or credentials, you can eliminate one of the biggest cyber security threats.

# Cyberus Key SDK

Cyberus Key SDK is a tiny library that provides a full support for Cyberys Key's password-less authentication which implements the OpenID Connect
protocol.

# How to install

With NPM:
```
npm install cyberuskey-sdk
```

With Yarn:
```
yarn add cyberuskey-sdk
```

You can also get a minified file from JSDelivr's CDN:
```
<script src="https://cdn.jsdelivr.net/npm/cyberuskey-sdk@0.0.4/dist/sdk.es6.min.js" type="text/javascript"></script>

<script type="text/javascript">
  console.log(window['cyberuskey-sdk']);
</script>
```

# Documentation

## Classes

<dl>
<dt><a href="#CyberusKeyAPI">CyberusKeyAPI</a></dt>
<dd></dd>
<dt><a href="#LoginOptions">LoginOptions</a></dt>
<dd></dd>
<dt><a href="#OpenIdScopeParser">OpenIdScopeParser</a></dt>
<dd></dd>
<dt><a href="#Session">Session</a></dt>
<dd></dd>
<dt><a href="#Geolocation">Geolocation</a></dt>
<dd></dd>
<dt><a href="#HTML5GeoProvider">HTML5GeoProvider</a></dt>
<dd></dd>
<dt><a href="#RedirectNavigator">RedirectNavigator</a></dt>
<dd></dd>
</dl>

<a name="CyberusKeyAPI"></a>

## CyberusKeyAPI
**Kind**: global class  

* [CyberusKeyAPI](#CyberusKeyAPI)
    * [new CyberusKeyAPI()](#new_CyberusKeyAPI_new)
    * _instance_
        * [.createSession(clientId, [geo], [origin])](#CyberusKeyAPI+createSession) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.isOutOfService()](#CyberusKeyAPI+isOutOfService) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.getOTPSound(session)](#CyberusKeyAPI+getOTPSound) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.getAuthenticationEndpointUrl(sessionId, scope, clientId, redirectUri, [state], [nonce], [responseType])](#CyberusKeyAPI+getAuthenticationEndpointUrl) ⇒
        * [.navigateAuthentication(clientId, redirectUri, scope, navigator, session, [origin], [state], [nonce], [responseType])](#CyberusKeyAPI+navigateAuthentication) ⇒ <code>Promise.&lt;void&gt;</code>
    * _static_
        * [.CyberusKeyAPI](#CyberusKeyAPI.CyberusKeyAPI)
            * [new CyberusKeyAPI(hostUrl, [geoProvider], [delayMs])](#new_CyberusKeyAPI.CyberusKeyAPI_new)

<a name="new_CyberusKeyAPI_new"></a>

### new CyberusKeyAPI()
<p>Cyberus Key API which allows you to do a delegate login with OpenId protocol.</p>

<a name="CyberusKeyAPI+createSession"></a>

### cyberusKeyAPI.createSession(clientId, [geo], [origin]) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Creates the Cyberus Key session.</p>

**Kind**: instance method of [<code>CyberusKeyAPI</code>](#CyberusKeyAPI)  
**Returns**: <code>Promise.&lt;string&gt;</code> - <p>The Cyberus Key session id.</p>  
**Throws**:

- <p>WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError</p>


| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | <p>Public client ID generated during creating the account.</p> |
| [geo] | [<code>Geolocation</code>](#Geolocation) | <p>Give a value if you want to pass optional geolocation measurement. It can be later use to compare it against the mobile's measurement (if you have set <code>fail_on_geo_mismatch</code>). Those measurements can be used also to general improvement of the security.</p> |
| [origin] | <code>string</code> | <p>The origin domain of the request being made. If <code>null</code> then the Referer header will be used.</p> |

<a name="CyberusKeyAPI+isOutOfService"></a>

### cyberusKeyAPI.isOutOfService() ⇒ <code>Promise.&lt;boolean&gt;</code>
<p>Checks if authentication server is available</p>

**Kind**: instance method of [<code>CyberusKeyAPI</code>](#CyberusKeyAPI)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - <p>flag indicating if the authentication server is available.</p>  
<a name="CyberusKeyAPI+getOTPSound"></a>

### cyberusKeyAPI.getOTPSound(session) ⇒ <code>Promise.&lt;string&gt;</code>
<p>Gets a URL with sound with embedded OTP. You have to emit it.</p>

**Kind**: instance method of [<code>CyberusKeyAPI</code>](#CyberusKeyAPI)  
**Returns**: <code>Promise.&lt;string&gt;</code> - <p>string with url to the sound.</p>  
**Throws**:

- <p>ResourceNotFoundError</p>


| Param | Type | Description |
| --- | --- | --- |
| session | [<code>Session</code>](#Session) | <p>Cyberus Key's session generated by a user for a login.</p> |

<a name="CyberusKeyAPI+getAuthenticationEndpointUrl"></a>

### cyberusKeyAPI.getAuthenticationEndpointUrl(sessionId, scope, clientId, redirectUri, [state], [nonce], [responseType]) ⇒
<p>Gets OpenID's Authentication endpoint URL which will be used to process the authentication.</p>

**Kind**: instance method of [<code>CyberusKeyAPI</code>](#CyberusKeyAPI)  
**Returns**: <p>OpenID's Authentication endpoint URL</p>  
**Throws**:

- <p>InvalidRedirectUriError, InvalidClientError, ResourceNotFoundError</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sessionId |  |  | <p>unique id created for the specific login and connected to the specific otp</p> |
| scope | [<code>OpenIdScopeParser</code>](#OpenIdScopeParser) |  | <p>Each scope returns a set of user attributes, which are called claims. Once the user authorizes the requested scopes, the claims are returned in an ID Token.</p> |
| clientId | <code>string</code> |  | <p>Public client ID generated during creating the account.</p> |
| redirectUri | <code>string</code> |  | <p>Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.</p> |
| [state] | <code>string</code> |  | <p>RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie. The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response. It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request). The state parameter is a string so you can encode any other information in it.</p> |
| [nonce] | <code>string</code> |  | <p>String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.</p> |
| [responseType] | <code>string</code> | <code>&quot;&#x27;code&#x27;&quot;</code> | <p>OpenId response type. The default is <code>code</code> (Code Flow, involving the front-channel and backchannel).</p> |

<a name="CyberusKeyAPI+navigateAuthentication"></a>

### cyberusKeyAPI.navigateAuthentication(clientId, redirectUri, scope, navigator, session, [origin], [state], [nonce], [responseType]) ⇒ <code>Promise.&lt;void&gt;</code>
<p>Navigates to Authentication Endpoint</p>

**Kind**: instance method of [<code>CyberusKeyAPI</code>](#CyberusKeyAPI)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| clientId | <code>string</code> |  | <p>Public client ID generated during creating the account.</p> |
| redirectUri | <code>string</code> |  | <p>Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.</p> |
| scope | [<code>OpenIdScopeParser</code>](#OpenIdScopeParser) |  | <p>Each scope returns a set of user attributes, which are called claims. Once the user authorizes the requested scopes, the claims are returned in an ID Token.</p> |
| navigator | <code>Navigator</code> |  | <p>Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.</p> |
| session |  |  | <p>Session id</p> |
| [origin] | <code>string</code> |  | <p>The origin domain of the request being made. If <code>null</code> then the Referer header will be used.</p> |
| [state] | <code>string</code> |  | <p>RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie. The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response. It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request). The state parameter is a string so you can encode any other information in it.</p> |
| [nonce] | <code>string</code> |  | <p>String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.</p> |
| [responseType] | <code>string</code> | <code>&quot;&#x27;code&#x27;&quot;</code> | <p>OpenId response type. The default is <code>code</code> (Code Flow, involving the front-channel and backchannel).</p> |

<a name="CyberusKeyAPI.CyberusKeyAPI"></a>

### CyberusKeyAPI.CyberusKeyAPI
**Kind**: static class of [<code>CyberusKeyAPI</code>](#CyberusKeyAPI)  
<a name="new_CyberusKeyAPI.CyberusKeyAPI_new"></a>

#### new CyberusKeyAPI(hostUrl, [geoProvider], [delayMs])
<p>Creates an instance of CyberusKeyAPI.</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hostUrl | <code>string</code> |  | <p>Base URL of the host server, e.g. <code>https://api.cyberuskey.com</code></p> |
| [geoProvider] | <code>GeoProvider</code> |  | <p>Geolocalization provider. Use specific implementation like <code>HTML5GeoProvider</code>.</p> |
| [delayMs] | <code>number</code> | <code>600</code> | <p>Delay (ms) between making an Authentication request and a sound playing.</p> |

<a name="LoginOptions"></a>

## LoginOptions
**Kind**: global class  

* [LoginOptions](#LoginOptions)
    * [new LoginOptions()](#new_LoginOptions_new)
    * [.responseType](#LoginOptions.responseType) : <code>string</code>
    * [.display](#LoginOptions.display) : <code>string</code>
    * [.prompt](#LoginOptions.prompt) : <code>string</code>
    * [.theme](#LoginOptions.theme) : <code>string</code>

<a name="new_LoginOptions_new"></a>

### new LoginOptions()
<p>Login options.</p>

<a name="LoginOptions.responseType"></a>

### LoginOptions.responseType : <code>string</code>
**Kind**: static property of [<code>LoginOptions</code>](#LoginOptions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [responseType] | <code>string</code> | <code>&quot;&#x27;code&#x27;&quot;</code> | <p>OpenId response type. The default is <code>code</code> (Code Flow, involving the front-channel and backchannel).</p> |

<a name="LoginOptions.display"></a>

### LoginOptions.display : <code>string</code>
**Kind**: static property of [<code>LoginOptions</code>](#LoginOptions)  

| Param | Type | Description |
| --- | --- | --- |
| display | <code>string</code> | <p>It specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User. Default and the only supported value is <code>page</code>.</p> |

<a name="LoginOptions.prompt"></a>

### LoginOptions.prompt : <code>string</code>
**Kind**: static property of [<code>LoginOptions</code>](#LoginOptions)  

| Param | Type | Description |
| --- | --- | --- |
| prompt | <code>string</code> | <p>Space delimited, case sensitive list of string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The defined values are: <code>login</code>, <code>none</code>. Default is <code>login,none</code>. Can't be changed for now.</p> |

<a name="LoginOptions.theme"></a>

### LoginOptions.theme : <code>string</code>
<p>Theme of the login page of Cyberus Key Dashboard. Default is <code>default</code>.</p>

**Kind**: static property of [<code>LoginOptions</code>](#LoginOptions)  
<a name="OpenIdScopeParser"></a>

## OpenIdScopeParser
**Kind**: global class  

* [OpenIdScopeParser](#OpenIdScopeParser)
    * [new OpenIdScopeParser()](#new_OpenIdScopeParser_new)
    * [.addEmail()](#OpenIdScopeParser+addEmail) ⇒ <code>this</code>
    * [.addProfile()](#OpenIdScopeParser+addProfile) ⇒ <code>this</code>
    * [.getValue()](#OpenIdScopeParser+getValue) ⇒ <code>string</code>

<a name="new_OpenIdScopeParser_new"></a>

### new OpenIdScopeParser()
<p>Handy class to define an OpenID's scope.
Scopes are used by an application during authentication to authorize access to a user's details,
like name and picture. Each scope returns a set of user attributes, which are called claims.</p>
<p>You can use additional values <code>email</code> (add a user's email claim) and <code>profile</code> (add user first and last name).</p>
<pre class="prettyprint source lang-javascript"><code>const scopeParser = new OpenIdScopeParser();
const scope = scopeParser.addEmail().addProfile().getValue();
</code></pre>

<a name="OpenIdScopeParser+addEmail"></a>

### openIdScopeParser.addEmail() ⇒ <code>this</code>
<p>Adds <code>email</code> scope.</p>

**Kind**: instance method of [<code>OpenIdScopeParser</code>](#OpenIdScopeParser)  
<a name="OpenIdScopeParser+addProfile"></a>

### openIdScopeParser.addProfile() ⇒ <code>this</code>
<p>Adds <code>profile</code> scope.</p>

**Kind**: instance method of [<code>OpenIdScopeParser</code>](#OpenIdScopeParser)  
<a name="OpenIdScopeParser+getValue"></a>

### openIdScopeParser.getValue() ⇒ <code>string</code>
<p>Gets formatted scope value, e.g. <code>openid email</code>.</p>

**Kind**: instance method of [<code>OpenIdScopeParser</code>](#OpenIdScopeParser)  
<a name="Session"></a>

## Session
**Kind**: global class  

* [Session](#Session)
    * [new Session()](#new_Session_new)
    * [.Session](#Session.Session) : <code>Date</code>
        * [new Session()](#new_Session.Session_new)

<a name="new_Session_new"></a>

### new Session()
<p>Data class representing a Cyberus Key session.</p>

<a name="Session.Session"></a>

### Session.Session : <code>Date</code>
**Kind**: static class of [<code>Session</code>](#Session)  
<a name="new_Session.Session_new"></a>

#### new Session()
<p>A UTC date representing a date (and time) when a session has been created.</p>

<a name="Geolocation"></a>

## Geolocation
**Kind**: global class  

* [Geolocation](#Geolocation)
    * [new Geolocation()](#new_Geolocation_new)
    * [.latitude](#Geolocation+latitude) : <code>number</code>
    * [.longitude](#Geolocation+longitude) : <code>number</code>
    * [.accuracy](#Geolocation+accuracy) : <code>number</code>

<a name="new_Geolocation_new"></a>

### new Geolocation()
<p>An abstraction for a taken geolocation measurement.</p>

<a name="Geolocation+latitude"></a>

### geolocation.latitude : <code>number</code>
<p>Get a latitude.</p>

**Kind**: instance property of [<code>Geolocation</code>](#Geolocation)  
**Read only**: true  
<a name="Geolocation+longitude"></a>

### geolocation.longitude : <code>number</code>
<p>Gets a longitude.</p>

**Kind**: instance property of [<code>Geolocation</code>](#Geolocation)  
**Read only**: true  
<a name="Geolocation+accuracy"></a>

### geolocation.accuracy : <code>number</code>
<p>Gets an accuracy of a measurement.</p>

**Kind**: instance property of [<code>Geolocation</code>](#Geolocation)  
**Read only**: true  
<a name="HTML5GeoProvider"></a>

## HTML5GeoProvider
**Kind**: global class  
**Implements**: <code>GeoProvider</code>  

* [HTML5GeoProvider](#HTML5GeoProvider)
    * [new HTML5GeoProvider()](#new_HTML5GeoProvider_new)
    * _instance_
        * [.getGeo()](#HTML5GeoProvider+getGeo) ⇒ [<code>Promise.&lt;Geolocation&gt;</code>](#Geolocation)
    * _static_
        * [.HTML5GeoProvider](#HTML5GeoProvider.HTML5GeoProvider)
            * [new HTML5GeoProvider([enableHighAccuracy], [navigator], numOfTriesBeforeGpsActivates, onPermissionDialog)](#new_HTML5GeoProvider.HTML5GeoProvider_new)

<a name="new_HTML5GeoProvider_new"></a>

### new HTML5GeoProvider()
<p>Class provides a geolocalization measurement.
It uses a HTML5's <code>Geolocation.getCurrentPosition()</code> method.</p>

<a name="HTML5GeoProvider+getGeo"></a>

### htmL5GeoProvider.getGeo() ⇒ [<code>Promise.&lt;Geolocation&gt;</code>](#Geolocation)
<p>Gets a geolocalization measurement.</p>

**Kind**: instance method of [<code>HTML5GeoProvider</code>](#HTML5GeoProvider)  
**Returns**: [<code>Promise.&lt;Geolocation&gt;</code>](#Geolocation) - <p>Geolocalization measurement.</p>  
<a name="HTML5GeoProvider.HTML5GeoProvider"></a>

### HTML5GeoProvider.HTML5GeoProvider
**Kind**: static class of [<code>HTML5GeoProvider</code>](#HTML5GeoProvider)  
<a name="new_HTML5GeoProvider.HTML5GeoProvider_new"></a>

#### new HTML5GeoProvider([enableHighAccuracy], [navigator], numOfTriesBeforeGpsActivates, onPermissionDialog)
<p>Creates an instance of HTML5GeoProvider.</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [enableHighAccuracy] | <code>boolean</code> | <code>false</code> | <p>Forces high accuracy of the geolocation. It may take longer.</p> |
| [navigator] | <code>Navigator</code> | <code>window.navigator</code> |  |
| numOfTriesBeforeGpsActivates |  |  | <p>The GPS localization will be used only after n unsuccessful tries. By unsuccessful try we define the number of times the authentication resulted in session not found error.</p> |
| onPermissionDialog |  |  | <p>Leave an implementation of the additional information dialog to appear before site asks for localization permission for the caller to handle. It takes a function with default message as parameter</p> |

<a name="RedirectNavigator"></a>

## RedirectNavigator
**Kind**: global class  
**Implements**: <code>Navigator</code>  

* [RedirectNavigator](#RedirectNavigator)
    * [new RedirectNavigator()](#new_RedirectNavigator_new)
    * [.navigate(url)](#RedirectNavigator+navigate) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_RedirectNavigator_new"></a>

### new RedirectNavigator()
<p>Class describes how OpenID's Authentication Endpoint will be handled.
This class is thighten to a default browser behaviour for OpenID protocol - a redirection.
Which means that your URL will be temporarily replaced by the Authentication Endpoint
and replaced again by its response - HTTP 302. The new location will be the one you defined as your <code>redirect_uri</code>.</p>

<a name="RedirectNavigator+navigate"></a>

### redirectNavigator.navigate(url) ⇒ <code>Promise.&lt;void&gt;</code>
<p>Navigates to the given URL.</p>

**Kind**: instance method of [<code>RedirectNavigator</code>](#RedirectNavigator)  
**Throws**:

- <p>MissingRedirectUri</p>


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>Authentication Endpoint URL.</p> |


# Links

CyberusKey JavaScript widget: https://github.com/CyberusLabs/cyberuskey-widget/

# License

[MIT](LICENSE.md) © Cyberus Labs sp. z o.o.
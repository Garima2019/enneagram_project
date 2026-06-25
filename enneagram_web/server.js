// Node.js Web Server serving HTTP (8080) and HTTPS (8443) for EnneagramDashboard

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

// Self-signed certificate PEM data for localhost
const PRIVATE_KEY_PEM = `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA0C9zP0N1qf5aG8R9lC9bB8kXkE0zG5D5s7Y4Z5z/Vz/a4K1U
aC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z
5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9
aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+
1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9a
N5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1
c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN
5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c
/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5
x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/
9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x
8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9
a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8
zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a
4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8z
Z9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4
K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ
9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K
1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9
Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1
UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y
5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1U
aC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5
z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1Ua
C9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z
5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC
9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5
+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9
aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+
1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9a
N5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1
c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN
5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c
/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5
x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/
9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x
8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9
a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8
zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a
4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8z
Z9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4
K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ
9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K
1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9
Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1
UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y
5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1U
aC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5
z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1Ua
C9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z
5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC
9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5
+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9
aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+
1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9a
N5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1
c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN
5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c
/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5
x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/
9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x
8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9
a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8
zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a
4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8z
Z9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4
K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ
9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K
1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9
Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1
UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y
5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1U
aC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5
z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1Ua
C9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z
5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC
9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5
+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9
aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+
1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9a
N5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1
c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN
5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c
/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5
x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/
9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x
8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9
a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8
zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a
4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8z
Z9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4
K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ
9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K
1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9
Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1
UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9y
-----END RSA PRIVATE KEY-----`;

const PUBLIC_CERT_PEM = `-----BEGIN CERTIFICATE-----
MIIDHzCCAgcCFD3o+G0c/WbHj9S1vPj8g8tXkE0zMA0GCSqGSIb3DQEBCwUAMBsx
GTAXBgNVBAMMEGxvY2FsaG9zdC1jZXJ0czAeFw0yNjA2MjUxMTQwMDBaFw0zNjA2
MjMxMTQwMDBaMBsxGTAXBgNVBAMMEGxvY2FsaG9zdC1jZXJ0czCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAKxQo5uYQ6vD78Q8Tj+N3b5S+zV8j33L2b9T
e8R9jC9bB8kXkE0zG5D5s7Y4Z5z/Vz/a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9
aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+
1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9a
N5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1
c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN
5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c
/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5
x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/
9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x
8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9
a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8
zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a
4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8z
Z9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4
K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ
9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K
1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9
Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1
UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y
5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1U
aC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5
z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1Ua
C9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z
5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC
9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5
+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC9aN5x8zZ9Y5z5+1c/9a4K1UaC
MA0GCSqGSIb3DQEBCwUAA4IBAQCsUaObmEOrw+/EPE4/jd2+Uvs1fI99y9m/U3vE
fYwvWwfJF5BNMxuQ+bO2OGec/1c/2uCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWje
cfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/
WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecf
M2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/W
uCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM
2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/Wu
CtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2
fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuC
tVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2f
WOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCt
VGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fW
Oc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtV
GgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWO
c+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVG
gvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fWOc+ftXP/WuCtVGgvWjecfM2fW
-----END CERTIFICATE-----`;

const HTTP_PORT = 8080;
const HTTPS_PORT = 8443;
const PUBLIC_DIR = __dirname;

// MIME type map
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Main request router
function requestHandler(req, res) {
    // Normalise path and remove query strings
    let filePath = req.url.split('?')[0];
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    const absolutePath = path.join(PUBLIC_DIR, filePath);
    
    // Check path is within directory bounds (basic security)
    if (!absolutePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }
    
    // Check if file exists
    fs.stat(absolutePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        
        // Read and serve file
        const ext = path.extname(absolutePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        res.writeHead(200, { 'Content-Type': contentType });
        
        const stream = fs.createReadStream(absolutePath);
        stream.pipe(res);
    });
}

// Write SSL certificates if they don't exist
const certDir = path.join(PUBLIC_DIR, '.certs');
if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir);
}

const keyPath = path.join(certDir, 'key.pem');
const certPath = path.join(certDir, 'cert.pem');

try {
    fs.writeFileSync(keyPath, PRIVATE_KEY_PEM, { flag: 'wx' });
    fs.writeFileSync(certPath, PUBLIC_CERT_PEM, { flag: 'wx' });
} catch (e) {
    // File already exists or error, safe to ignore
}

// Start HTTP Server
const httpServer = http.createServer(requestHandler);
httpServer.listen(HTTP_PORT, () => {
    console.log(`\n\x1b[33m🍳 [HTTP Server] Cooking on http://localhost:${HTTP_PORT}\x1b[0m`);
});

// Start HTTPS Server
try {
    const options = {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath)
    };
    const httpsServer = https.createServer(options, requestHandler);
    httpsServer.listen(HTTPS_PORT, () => {
        console.log(`\x1b[36m🔥 [HTTPS Server] Cooking on https://localhost:${HTTPS_PORT}\x1b[0m`);
        console.log(`\x1b[32m✨ Enneagram Dashboard successfully served! Press Ctrl+C to clean the kitchen.\x1b[0m\n`);
    });
} catch (e) {
    console.error('Failed to start HTTPS server:', e.message);
}

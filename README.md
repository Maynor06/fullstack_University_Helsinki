Aqui el diagrama de la solicitud cuando mandas el formulario de la pagina (Una sola pagina)

browser->>server: POST 201 Created https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server 

server-->>browser: HTML document

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: [{ "content": "como estan señores?", "date": "2023-1-1" }, ... ]
deactivate server

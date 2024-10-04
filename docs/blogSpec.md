# Blog Spec

## GET LIST POST

Endpoint: GET /posts

### API Response
```json
{
  "success": true,
  "code": 200,
  "message": "Success to get data",
  "data": [
    {
      "id": "xxxxx",
      "title": "How to read a book",
      "body": "Open the book",
      "author": "Villian",
      "created_at": "2024-09-26 00:00:00",
      "updated_at": "2024-09-26 00:00:00",
      "deleted_at": null
    }
  ]
}
```

## GET SINGLE POST

Endpoint: GET /posts/:id

### API Response
```json
{
  "success": true,
  "code": 200,
  "message": "Success to get data",
  "data": {
    "id": "xxxxx",
    "title": "How to read a book",
    "body": "Open the book",
    "author": "Villian",
    "created_at": "2024-09-26 00:00:00",
    "updated_at": "2024-09-26 00:00:00",
    "deleted_at": null
  }
}
```

## CREATE A POST
Endpoint: POST /posts

### API Request Body

```json
{
  "title": "How to read a book",
  "body": "Open the book",
  "author": "Villian"
}
```

### API Response Success

```json
{
  "success": true,
  "code": 200,
  "message": "Success to create data",
  "data": {
    "id": "xxxxx",
    "title": "How to read a book",
    "body": "Open the book",
    "author": "Villian",
    "created_at": "2024-09-26 00:00:00",
    "updated_at": "2024-09-26 00:00:00",
    "deleted_at": null
  }
}
```

### API Response Failed

#### Client Error

```json
{
  "success": false,
  "code": 400,
  "message": "Failed to create data, title is not filled!",
  "data": null
}
```

#### Server Error

```json
{
  "success": false,
  "code": 500,
  "message": "Failed to create data, an error has occured!",
  "data": null
}
```

## EDIT A POST

Endpoint: PUT /posts/:id

### API Request Body

```json
{
  "id": "xxxxxx",
  "title": "How to read a book",
  "body": "Open the book",
  "author": "Villian"
}
```

### API Response Success

```json
{
  "success": true,
  "code": 200,
  "message": "Success to update data",
  "data": {
    "id": "xxxxx",
    "title": "How to read a book",
    "body": "Open the book",
    "author": "Villian",
    "created_at": "2024-09-26 00:00:00",
    "updated_at": "2024-09-26 12:00:00",
    "deleted_at": null
  }
}
```

### API Response Failed

#### Client Error

```json
{
  "success": false,
  "code": 400,
  "message": "Failed to update data, title is not filled!",
  "data": null
}
```

#### Server Error

```json
{
  "success": false,
  "code": 500,
  "message": "Failed to update data, an error has occured!",
  "data": null
}
```

## DELETE A POST

Endpoint: DELETE /posts/:id

### API Response
```json
{
  "success": true,
  "code": 200,
  "message": "Success to delete data",
  "data": null
}
```

### API Response Failed

#### Client Error

```json
{
  "success": false,
  "code": 400,
  "message": "Failed to delete data, id is not found!",
  "data": null
}
```

#### Server Error

```json
{
  "success": false,
  "code": 500,
  "message": "Failed to delete data, an error has occured!",
  "data": null
}
```
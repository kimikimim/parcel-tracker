# API Spec (Summary)

## GET /api/track
Query params:
- `num` (required): tracking number
- `carrier` (optional): carrier code (empty = auto detect)
- `bl` (optional): BL/HAWB/MAWB
- `pccc` (optional): Personal customs code

Response:
```json
{
  "carrier": "auto",
  "number": "XXXX",
  "events": [{"id":"...","time":"...","status":"ARRIVED_DEST_AIRPORT","desc":"..."}],
  "latest": "ARRIVED_DEST_AIRPORT",
  "progress": 42,
  "eta": "2025-11-12T00:00:00.000Z"
}
```

## GET /api/clearance
- `bl`, `pccc` optional. (stub until keys are provided)

## POST /webhooks/:provider
- Receive callbacks from providers (signature verify TBD).

## POST /api/subscribe
- Save web push subscription (stub memory).

## POST /api/subscribe/test
- Send push to stored subs (for testing).

## GET /api/stats/eta?status=&carrier=
- Helper endpoint to test ETA heuristic.

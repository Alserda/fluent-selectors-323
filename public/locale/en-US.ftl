title = Hello, world!

today-is = Today is { DATETIME($date, month: "long", day: "numeric") }.

unread-emails =
    You have { $emails_count ->
        [0] no unread emails
        [one] one unread email
       *[other] { $emails_count } unread emails
    }.
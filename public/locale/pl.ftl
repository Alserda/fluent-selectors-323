title = Witaj świecie!

today-is = Dziś jest { DATETIME($date, month: "long", day: "numeric") }.

unread-emails =
    Ty masz { $emails_count ->
        [0] brak nieprzeczytanych wiadomości e-mail
        [one] jeden nieprzeczytany e-mail
       *[other] { $emails_count } nieprzeczytane e-maile
    }.
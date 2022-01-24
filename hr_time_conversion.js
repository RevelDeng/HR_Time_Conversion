function timeConversion(s) {
    // Write your code here
    var s_arr = Array.from(s)
    var hour = parseInt(s_arr[0] + s_arr[1])
    if (s_arr[s_arr.length - 2] == 'P') {
        if (hour != 12) {
            hour += 12
            let hour_str = hour.toString()
            for (let i = 0; i < 2; i++) {
                s_arr[i] = hour_str[i]
            }
            s_arr.length -= 2
            return s_arr.join("")
        }
        else {
            s_arr.length -= 2
            return s_arr.join("")
        }
    }
    else {
        if (hour == 12) {
            s_arr[0] = 0
            s_arr[1] = 0
            s_arr.length -= 2
            return s_arr.join("")
        }
        else {
            s_arr.length -= 2
            return s_arr.join("")
        }
    }
}
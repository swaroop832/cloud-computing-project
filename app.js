var app = angular.module('app',['ngRoute']);

app.controller('MainCtrl', function ($scope, $http) {

    $scope.myfunction=  function () {

        $http({
            method: 'GET',
            url: "https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2010"

        }).then(function (response) {

            $scope.mydata = response.data;
            $scope.mydata2010 = $scope.mydata.length;

            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2011").then(function (response) {

                $scope.mydata1 = response.data;
                $scope.mydata2011 = $scope.mydata1.length;

                $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2012").then(function (response) {

                    $scope.mydata2 = response.data;
                    $scope.mydata2012 = $scope.mydata2.length;
                    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2013").then(function (response) {

                        $scope.mydata3 = response.data;
                        $scope.mydata2013 = $scope.mydata3.length;

                        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2014").then(function (response) {

                            $scope.mydata4 = response.data;
                            $scope.mydata2014 = $scope.mydata4.length;

                            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2015").then(function (response) {
                                $scope.mydata5 = response.data;
                                $scope.mydata2015 = $scope.mydata5.length;
                                $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2016").then(function (response) {

                                    $scope.mydata6 = response.data;
                                    $scope.mydata2016 = $scope.mydata6.length;
                                    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2010&$group=council_district").then(function (response) {
                                        $scope.mydata10 = response.data[0].count_case_id;
                                        $scope.mydata20101 = response.data[0].council_district;
                                        $scope.mydata101 = response.data[1].count_case_id;
                                        $scope.mydata20102 = response.data[1].council_district;
                                        console.log($scope.mydata10);
                                        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2011&$group=council_district").then(function (response) {
                                            $scope.mydata11 = response.data[0].count_case_id;
                                            $scope.mydata20111 = response.data[0].council_district;
                                            $scope.mydata111 = response.data[1].count_case_id;
                                            $scope.mydata20112 = response.data[1].council_district;
                                            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2012&$group=council_district").then(function (response) {
                                                $scope.mydata12 = response.data[0].count_case_id;
                                                $scope.mydata20121 = response.data[0].council_district;
                                                $scope.mydata121 = response.data[1].count_case_id;
                                                $scope.mydata20122 = response.data[1].council_district;
                                                $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2013&$group=council_district").then(function (response) {
                                                    $scope.mydata13 = response.data[0].count_case_id;
                                                    $scope.mydata20131 = response.data[0].council_district;
                                                    $scope.mydata131 = response.data[1].count_case_id;
                                                    $scope.mydata20132 = response.data[1].council_district;
                                                    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2014&$group=council_district").then(function (response) {
                                                        $scope.mydata14 = response.data[0].count_case_id;
                                                        $scope.mydata20141 = response.data[0].council_district;
                                                        $scope.mydata141 = response.data[1].count_case_id;
                                                        $scope.mydata20142 = response.data[1].council_district;
                                                        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2015&$group=council_district").then(function (response) {
                                                            $scope.mydata15 = response.data[0].count_case_id;
                                                            $scope.mydata20151 = response.data[0].council_district;
                                                            $scope.mydata151 = response.data[1].count_case_id;
                                                            $scope.mydata20152 = response.data[1].council_district;
                                                            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=council_district,count(case_id)&creation_year=2016&$group=council_district").then(function (response) {
                                                                $scope.mydata16 = response.data[0].count_case_id;
                                                                $scope.mydata20161 = response.data[0].council_district;
                                                                $scope.mydata161 = response.data[1].count_case_id;
                                                                $scope.mydata20162 = response.data[1].council_district;
                                                                drawStacked();
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawStacked);

    function drawStacked() {
        var data = google.visualization.arrayToDataTable([
            ['year', 'No. of Records per year', '1st max by council_dist in year', '2nd max by counci_dist in year'],
            ['2010', $scope.mydata2010, parseInt($scope.mydata10), parseInt($scope.mydata101)],
            ['2011', $scope.mydata2011, parseInt($scope.mydata11), parseInt($scope.mydata111)],
            ['2012', $scope.mydata2012, parseInt($scope.mydata12), parseInt($scope.mydata121) ],
            ['2013', $scope.mydata2013, parseInt($scope.mydata13), parseInt($scope.mydata131)],
            ['2014', $scope.mydata2014, parseInt($scope.mydata14), parseInt($scope.mydata141)],
            ['2015', $scope.mydata2015, parseInt($scope.mydata15), parseInt($scope.mydata151)],
            ['2016', $scope.mydata2016, parseInt($scope.mydata16), parseInt($scope.mydata161)]
        ]);

        var options = {
            title: 'The chart shows the call service requests per year and 1st max, 2nd max per council district for a given year',
            chartArea: {width: '50%'},
            isStacked: true,
            hAxis: {
                title: 'Number of Call Requests',
                minValue: 0
            },
            bars: 'horizontal'
        };
        var chart = new google.visualization.BarChart(document.getElementById('barchart_material'));
        chart.draw(data, options);
    }

});
app.controller('MainCtrl1',function ($scope,$http) {

    $scope.myfunction1 = function (use) {

        var x = document.getElementById("tt31");
        x.style.display = "block";

        var enteredYear2;
        enteredYear2 = document.getElementById("year3").value;
        if (isNaN(enteredYear2) || enteredYear2 < 2006 || enteredYear2 > 2019) {
            text = "Please enter year between 2007-2017";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage6").innerHTML = text;

        var enteredMonth4;
        enteredMonth4 = document.getElementById("month3").value;
        if (isNaN(enteredMonth4) || enteredMonth4 < 0 || enteredMonth4 > 13) {
            text = "Please enter Month between 1-12";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage7").innerHTML = text;

            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=zip_code,count(case_id)&creation_month=" + use.month + "&creation_year=" +use.year+"&$group=zip_code&$order=count(case_id)%20DESC").then(function (response) {


                $scope.data21 = response.data[0].count_case_id;
                $scope.data211 = response.data[0].zip_code;
                $scope.data22 = response.data[1].count_case_id;
                $scope.data212 = response.data[1].zip_code;
                $scope.data23 = response.data[2].count_case_id;
                $scope.data213 = response.data[2].zip_code;
                $scope.data24 = response.data[3].count_case_id;
                $scope.data214 = response.data[3].zip_code;
                $scope.data25 = response.data[4].count_case_id;
                $scope.data215 = response.data[4].zip_code;
                $scope.data26 = response.data[5].count_case_id;
                $scope.data216 = response.data[5].zip_code;
                drawChartx();
            });


        google.charts.load('current', {'packages': ['corechart']});
        google.charts.setOnLoadCallback(drawChartx);

        function drawChartx() {

            var data = google.visualization.arrayToDataTable([
                ['zipcode', 'No. call request for given month and time'],
                ['zipcode ' + $scope.data211, parseInt($scope.data21)],
                ['zipcode ' + $scope.data212, parseInt($scope.data22)],
                ['zipcode ' + $scope.data213, parseInt($scope.data23)],
                ['zipcode ' + $scope.data214, parseInt($scope.data24)],
                ['zipcode ' + $scope.data215, parseInt($scope.data25)],
                ['zipcode ' + $scope.data216, parseInt($scope.data26)]
            ]);

            var options = {
                title:'The pie chart displays number of service calls per zipcode in the selected month and year',
                backgroundColor: 'transparent',
                is3D: true
              //  chartArea: {width: '75%'}

            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }

    };

    $scope.myfunction2 = function (my) {

        var x = document.getElementById("tt32");
        x.style.display = "block";

        var enteredYear3;
        enteredYear3 = document.getElementById("year4").value;
        if (isNaN(enteredYear3) || enteredYear3 < 2006 || enteredYear3 > 2019) {
            text = "Please enter year between 2007-2017";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage8").innerHTML = text;

        var enteredMonth5;
        enteredMonth5 = document.getElementById("month4").value;
        if (isNaN(enteredMonth5) || enteredMonth5 < 0 || enteredMonth5 > 13) {
            text = "Please enter Month between 1-12";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage9").innerHTML = text;

            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=zip_code,count(case_id)&status=" + my.stas + "&creation_month=" + my.month1 + "&creation_year=" + my.year1 + "&$group=zip_code&$order=count(case_id)%20DESC").then(function (response) {

                $scope.data31 = response.data[0].count_case_id;
                console.log($scope.data31);
                $scope.data311 = response.data[0].zip_code;
                $scope.data32 = response.data[1].count_case_id;
                $scope.data321 = response.data[1].zip_code;
                $scope.data33 = response.data[2].count_case_id;
                $scope.data331 = response.data[2].zip_code;
                $scope.data34 = response.data[3].count_case_id;
                $scope.data341 = response.data[3].zip_code;
                $scope.data35 = response.data[4].count_case_id;
                $scope.data351 = response.data[4].zip_code;
                $scope.data36 = response.data[5].count_case_id;
                $scope.data361 = response.data[5].zip_code;
                drawChart();

            });


      google.charts.load('current', {'packages': ['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode', 'No. of requests'],
            ['zipcode ' + $scope.data311, parseInt($scope.data31)],
            ['zipcode ' + $scope.data321, parseInt($scope.data32)],
            ['zipcode ' + $scope.data331, parseInt($scope.data33)],
            ['zipcode ' + $scope.data341, parseInt($scope.data34)],
            ['zipcode ' + $scope.data351, parseInt($scope.data35)],
            ['zipcode ' + $scope.data361, parseInt($scope.data36)]
        ]);

        var options = {
            vAxis: {title: 'Call service requests'},
            isStacked: true,
            is3D: true
        };
        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    };
});

app.controller('MainCtrl2',function ($scope,$http) {

    $scope.myfunction3 = function (swa) {

        var x = document.getElementById("tt41");
        x.style.display = "block";

        var enteredYear;
        enteredYear = document.getElementById("year").value;
        if (isNaN(enteredYear) || enteredYear < 2006 || enteredYear > 2019) {
            text = "Please enter year between 2007-2017";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage").innerHTML = text;

        var e = document.getElementById("order");
        var orderValue = e.options[e.selectedIndex].text;
        if ( orderValue === "") {
            text = "Please select order";
        } else {
            text = "";
        }
        document.getElementById("orderErrorMessage").innerHTML = text;


        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year=" + swa.asp + "&$select=category,count(case_id)&$group=category&$order=count(case_id)%20" + swa.asq + "").then(function (response) {

            $scope.data4 = response.data;
            $scope.data41 = $scope.data4[0].category;
            $scope.data411 = $scope.data4[0].count_case_id;
            $scope.data42 = $scope.data4[1].category;
            $scope.data421 = $scope.data4[1].count_case_id;

            $scope.data43 = $scope.data4[2].category;
            $scope.data431 = $scope.data4[2].count_case_id;
            $scope.data44 = $scope.data4[3].category;
            $scope.data441 = $scope.data4[3].count_case_id;
            $scope.data45 = $scope.data4[4].category;
            $scope.data451 = $scope.data4[4].count_case_id;
            $scope.data46 = $scope.data4[5].category;
            $scope.data461 = $scope.data4[5].count_case_id;
            $scope.data47 = $scope.data4[6].category;
            $scope.data471 = $scope.data4[6].count_case_id;
            $scope.data48 = $scope.data4[7].category;
            $scope.data481 = $scope.data4[7].count_case_id;

            drawChart();
        });
    };

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['category', 'No. call request for given month and time'],
            [$scope.data41, parseInt($scope.data411)],
            [$scope.data42, parseInt($scope.data421)],
            [$scope.data43, parseInt($scope.data431)],
            [$scope.data44, parseInt($scope.data441)],
            [$scope.data45, parseInt($scope.data451)],
            [$scope.data46, parseInt($scope.data461)],
            [$scope.data47, parseInt($scope.data471)],
            [$scope.data48, parseInt($scope.data481)]

        ]);

        var options = {
            backgroundColor: 'transparent',
            chartArea: {width: '75%'},
            is3D: true

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }



    $scope.myfunction4 = function (swa) {

        var enteredMonth1;
        enteredMonth1 = document.getElementById("month2").value;
        if (isNaN(enteredMonth1) || enteredMonth1 < 0 || enteredMonth1 > 13) {
            text = "Please enter year between 1-12";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage4").innerHTML = text;

        var enteredYear1;
        enteredYear1 = document.getElementById("year2").value;
        if (isNaN(enteredYear1) || enteredYear1 < 2006 || enteredYear1 > 2019) {
            text = "Please enter year between 2007-2017";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage5").innerHTML = text;



        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+swa.asp+"&$select=category,count(case_id)&creation_month="+swa.asr +"&$group=category&$order=count(case_id)%20"+swa.asq+"")
            .then(function (response) {
                $scope.data5 = response.data;
        })

    };
    $scope.myfunction5 = function (sw) {

        var x1 = document.getElementById("tt42");
        x1.style.display = "block";

        var enteredMonth;
        enteredMonth = document.getElementById("month").value;
        if (isNaN(enteredMonth) || enteredMonth < 0 || enteredMonth > 13) {
            text = "Please enter year between 1-12";
        } else {
            text = "";
        }
        document.getElementById("yearErrorMessage1").innerHTML = text;

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month="+sw.mo+"&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

            $scope.data6 = response.data[0].count_case_id;
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=3&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data63 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=4&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data64 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=6&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data66 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=7&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data67 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=8&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data68 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=10&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data610 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=11&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data611 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=12&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data612 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=1&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data61 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=2&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data62 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=5&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data65 = response.data[0].count_case_id;

            });
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=10&creation_year="+sw.year+"&$select=category,count(case_id)&creation_month=9&category="+sw.cat+"&$group=category&$order=count(case_id)").then(function (response) {

                $scope.data69 = response.data[0].count_case_id;
                drawCharta();

            });

        });
    };
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawCharta);

    function drawCharta() {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'No.of records on this category'],
            ['JAN',  parseInt($scope.data61)],
            ['FEB',  parseInt($scope.data62)],
            ['MAR',  parseInt($scope.data63)],
            ['APR',  parseInt($scope.data64)],
            ['MAY',  parseInt($scope.data65)],
            ['JUN',  parseInt($scope.data66)],
            ['JUL',  parseInt($scope.data67)],
            ['AUG',  parseInt($scope.data68)],
            ['SEP',  parseInt($scope.data69)],
            ['OCT',  parseInt($scope.data610)],
            ['NOV',  parseInt($scope.data611)],
            ['DEC',  parseInt($scope.data612)]
        ]);

        var options = {
            backgroundColor: 'transparent',
            chartArea: {width: '83%'},
            hAxis: {month: 'Year',  titleTextStyle: {color: '#333'}},
            is3D: true
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart1_div'));
        chart.draw(data, options);
    }

    $scope.myfunction7 = function () {

        $http.get("").then(function (response) {
        })

    }

});

app.controller('MainCtrl3',function ($scope,$http) {

    $scope.myfunction6 = function (use) {

        var x = document.getElementById("hideData");
        x.style.display = "block";

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=creation_year,count(case_id)&$group=creation_year").then(function (response) {

            $scope.data7k = response.data;
            console.log($scope.data7k);


        });
        $http.get("https://data.austintexas.gov/resource/5h38-fd8d.json?$select=date_extract_y(sr_created_date)%20as%20year,count(*)&$group=year&$order=year").then(function (response) {

            $scope.data7A = response.data;

        });

        $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$select=date_extract_y(requested_datetime)as%20year,count(*)&$group=year&$order=year").then(function (response) {

            $scope.data7S = response.data;

        });


        $http.get("https://data.cincinnati-oh.gov/resource/5zzw-knr5.json?$select=date_extract_y(requested_date)as%20year,count(*)&$group=year&$order=year").then(function (response) {

            $scope.data7C = response.data;

        });
        $http.get("https://data.chattlibrary.org/resource/sf89-4qcw.json?$select=date_extract_y(created_date)as%20year,count(*)&$group=year&$order=year").then(function (response) {

            $scope.data7CH = response.data;

        });
        $http.get("https://data.nola.gov/resource/m959-fs8u.json?$select=date_extract_y(ticket_created_date_time)as%20year,count(*)&$group=year&$order=year").then(function (response) {

            $scope.data7N = response.data;

        });


    }

});

app.controller('MainCtrl4',function ($http,$scope) {

    $scope.myfunction61 = function (sw) {

        var x3 = document.getElementById("ss");
        x3.style.display = "block";

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year="+sw.year1+"&category="+sw.cat2+"").then(function (respone) {

            $scope.data8=respone.data[0].avg_days_to_close;
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2017&category="+sw.cat2+"").then(function (respone) {

            $scope.data81=respone.data[0].avg_days_to_close;
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2016&category="+sw.cat2+"").then(function (respone) {

            $scope.data82=respone.data[0].avg_days_to_close;
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2015&category="+sw.cat2+"").then(function (respone) {

            $scope.data83=respone.data[0].avg_days_to_close;
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2014&category="+sw.cat2+"").then(function (respone) {

            $scope.data84=respone.data[0].avg_days_to_close;

            drawChartp();
        });


    };

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartp);

    function drawChartp() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Average'],
            ['2015',  parseInt($scope.data83)],
            ['2016',  parseInt($scope.data82)],
            ['2017',  parseInt($scope.data81)]
        ]);

        var options = {
            title: 'pace of development',
            curveType: 'function',
            legend: { position: 'bottom' },
            is3D: true
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }


    $scope.myfunction62 = function (sw) {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year="+ sw.asp +"&exceeded_est_timeframe="+sw.asp1+"").then(function (response) {

            $scope.data91 = response.data[0].count_e;
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2017&exceeded_est_timeframe=Y").then(function (response) {

            $scope.data917y = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2016&exceeded_est_timeframe=Y").then(function (response) {

            $scope.data916y = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2015&exceeded_est_timeframe=Y").then(function (response) {

            $scope.data915y = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2014&exceeded_est_timeframe=Y").then(function (response) {

            $scope.data914y = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2013&exceeded_est_timeframe=Y").then(function (response) {

            $scope.data913y = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2012&exceeded_est_timeframe=Y").then(function (response) {

            $scope.data912y = response.data[0].count_e;

        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2012&exceeded_est_timeframe=N").then(function (response) {

            $scope.data912n = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2013&exceeded_est_timeframe=N").then(function (response) {

            $scope.data913n = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2014&exceeded_est_timeframe=N").then(function (response) {

            $scope.data914n = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2015&exceeded_est_timeframe=N").then(function (response) {

            $scope.data915n = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2016&exceeded_est_timeframe=N").then(function (response) {

            $scope.data916n = response.data[0].count_e;

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=exceeded_est_timeframe%20as%20e,count(e)&$group=e&creation_year=2017&exceeded_est_timeframe=N").then(function (response) {

            $scope.data917n = response.data[0].count_e;

        });
        drawAnnotations()

    };

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawAnnotations);

    function drawAnnotations() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Yes', 'No'],
            ['2012', parseInt($scope.data912y), parseInt($scope.data912n)],
            ['2013', parseInt($scope.data913y), parseInt($scope.data913n)],
            ['2014', parseInt($scope.data914y), parseInt($scope.data914n)],
            ['2015', parseInt($scope.data915y), parseInt($scope.data915n)],
            ['2016', parseInt($scope.data916y), parseInt($scope.data916n)],
            ['2017', parseInt($scope.data917y), parseInt($scope.data917n)]
        ]);

        var options = {
            chart: {
                title: 'Estimation time requested',
                subtitle: 'Yes or No: 2012-2017',
                seriesType: 'bars',
                vAxis: {title: 'No. of cases'},
                hAxis: {title: 'Year    '},
                series: {5: {type: 'line'}}

            }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart3_div'));
        chart.draw(data, options);
    }

});

app.config(['$routeProvider',function($routeProvider){
$routeProvider.
when('/', {
  template:'<h1 style="color: black ">Welcome to 311 data Visualization</h1>',
  controller:'MainCtrl'
  }).
  when('/firstPage', {
  templateUrl:'firstPage.html',
  controller:'MainCtrl'
  }).
  when('/secondPage', {
  templateUrl:'secondPage.html',
  controller:'MainCtrl'
  }).
  when('/thirdPage', {
  templateUrl:'thirdPage.html',
  controller:'MainCtrl1'
  }).
   when('/fourthPage',{
    templateUrl:'fourthpage.html',
    controller:'MainCtrl2'
}).
when('/fifthpage', {
    templateUrl: 'fifthpage.html',
    controller: 'MainCtrl3'
}).
when('/sixpage', {
        templateUrl: 'sixpage.html',
        controller: 'MainCtrl4'
}).
otherwise( {
    redirectTo : '/errorPage'
  });
}]);

//https://data.kcmo.org/resource/cyqf-nban.json?$select=zip_code,count(case_id)&creation_month=8&creation_year=2016&$group=zip_code&$order=count(case_id)%20DESC
//https://data.kcmo.org/resource/cyqf-nban.json?$select=category,count(case_id)&$group=category&$order=count(case_id)%20DESC
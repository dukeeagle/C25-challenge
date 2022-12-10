var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = DZIGA","category":"page"},{"location":"#DZIGA","page":"Home","title":"DZIGA","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DZIGA.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [DZIGA]","category":"page"},{"location":"#DZIGA.CityGraph","page":"Home","title":"DZIGA.CityGraph","text":"CityGraph\n\nstory a city as a graph adjacency matrix for easy traversal.  Given a 'City', produce a matrix dictionary with {endpointA : {endpointB : (duration, distance)} as key-value pairs. Also create an edges vector of tuples of (endpointA, endpointB) for easy traversal.\n\nFields\n\nmatrix::Dict{Int,Dict{Int,Tuple{Int,Int}}}: a dictionary of dictionaries where the first key is the starting junction and the second key is the ending junction. The value is a tuple of the duration and distance of the street.\nedges::Vector{Tuple{Int,Int}}: a vector of tuples of the starting and ending junctions of the street.\n\n\n\n\n\n","category":"type"},{"location":"#DZIGA.get_upper_bound-Tuple{HashCode2014.City}","page":"Home","title":"DZIGA.get_upper_bound","text":"get_upper_bound(city::City) ::Int\n\nReturn the greatest possible distance you can traverse for the given City by summing the longest streets first.\n\n\n\n\n\n","category":"method"},{"location":"#DZIGA.greedy_planner-Tuple{HashCode2014.City}","page":"Home","title":"DZIGA.greedy_planner","text":"greedy_planner(city::City) ::Int\n\nGreedily the greatest possible distance you can traverse for the given City. Best algorithm we have.\n\n\n\n\n\n","category":"method"}]
}

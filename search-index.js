var searchIndex = JSON.parse('{\
"tiberius":{"doc":"An asynchronous, runtime-independent, pure-rust Tabular…","i":[[3,"Uuid","tiberius","A Universally Unique Identifier (UUID).",null,null],[3,"Client","","`Client` is the main entry point to the SQL Server,…",null,null],[3,"Config","","The `Config` struct contains all configuration information…",null,null],[3,"QueryResult","","A set of `Streams` of [`Rows`] resulting from a `SELECT`…",null,null],[3,"ExecuteResult","","A result from a query execution, listing the number of…",null,null],[3,"Column","","A column of data from a query.",null,null],[3,"Row","","A row of data from a query.",null,null],[4,"AuthMethod","","Defines the method of authentication to the server.",null,null],[13,"SqlServer","","Authenticate directly with SQL Server. The only…",0,null],[13,"Windows","","Authenticate with Windows credentials. Only available on…",0,null],[13,"WindowsIntegrated","","Authenticate as the currently logged in user. Only…",0,null],[4,"ColumnType","","The type of the column.",null,null],[13,"Null","","The column doesn\'t have a specified type.",1,null],[13,"Bit","","A bit or boolean value.",1,null],[13,"Int1","","An 8-bit integer value.",1,null],[13,"Int2","","A 16-bit integer value.",1,null],[13,"Int4","","A 32-bit integer value.",1,null],[13,"Int8","","A 64-bit integer value.",1,null],[13,"Datetime4","","A 32-bit datetime value.",1,null],[13,"Float4","","A 32-bit floating point value.",1,null],[13,"Float8","","A 64-bit floating point value.",1,null],[13,"Money","","Money value.",1,null],[13,"Datetime","","A TDS 7.2 datetime value.",1,null],[13,"Money4","","A 32-bit money value.",1,null],[13,"Guid","","A unique identifier, UUID.",1,null],[13,"Intn","","N-bit integer value (variable).",1,null],[13,"Bitn","","A bit value in a variable-length type.",1,null],[13,"Decimaln","","A decimal value (same as `Numericn`).",1,null],[13,"Numericn","","A numeric value (same as `Decimaln`).",1,null],[13,"Floatn","","A n-bit floating point value.",1,null],[13,"Datetimen","","A n-bit datetime value (TDS 7.2).",1,null],[13,"Daten","","A n-bit date value (TDS 7.3).",1,null],[13,"Timen","","A n-bit time value (TDS 7.3).",1,null],[13,"Datetime2","","A n-bit datetime2 value (TDS 7.3).",1,null],[13,"DatetimeOffsetn","","A n-bit datetime value with an offset (TDS 7.3).",1,null],[13,"BigVarBin","","A variable binary value.",1,null],[13,"BigVarChar","","A large variable string value.",1,null],[13,"BigBinary","","A binary value.",1,null],[13,"BigChar","","A string value.",1,null],[13,"NVarchar","","A variable string value with UTF-16 encoding.",1,null],[13,"NChar","","A string value with UTF-16 encoding.",1,null],[13,"Xml","","A XML value.",1,null],[13,"Udt","","User-defined type.",1,null],[13,"Text","","A text value (deprecated).",1,null],[13,"Image","","A image value (deprecated).",1,null],[13,"NText","","A text value with UTF-16 encoding (deprecated).",1,null],[13,"SSVariant","","An SQL variant type.",1,null],[4,"ColumnData","","A container of a value that can be represented as a TDS…",null,null],[13,"I8","","8-bit integer, signed.",2,null],[13,"I16","","16-bit integer, signed.",2,null],[13,"I32","","32-bit integer, signed.",2,null],[13,"I64","","64-bit integer, signed.",2,null],[13,"F32","","32-bit floating point number.",2,null],[13,"F64","","64-bit floating point number.",2,null],[13,"Bit","","Boolean.",2,null],[13,"String","","A string value.",2,null],[13,"Guid","","A Guid (UUID) value.",2,null],[13,"Binary","","Binary data.",2,null],[13,"Numeric","","Numeric value (a decimal).",2,null],[13,"Xml","","XML data.",2,null],[13,"DateTime","","DateTime value.",2,null],[13,"SmallDateTime","","A small DateTime value.",2,null],[13,"Time","","Time value.",2,null],[13,"Date","","Date value.",2,null],[13,"DateTime2","","DateTime2 value.",2,null],[13,"DateTimeOffset","","DateTime2 value with an offset.",2,null],[4,"EncryptionLevel","","The configured encryption level specifying if encryption…",null,null],[13,"Off","","Only use encryption for the login procedure",3,null],[13,"On","","Encrypt everything if possible",3,null],[13,"NotSupported","","Do not encrypt anything",3,null],[13,"Required","","Encrypt everything and fail if not possible",3,null],[11,"sql_server","","Construct a new SQL Server authentication configuration.",0,[[]]],[11,"windows","","Construct a new Windows authentication configuration. Only…",0,[[]]],[11,"new","","Create a new `Config` with the default settings.",4,[[]]],[11,"host","","A host or ip address to connect to.",4,[[]]],[11,"port","","The server port.",4,[[]]],[11,"database","","The database to connect to.",4,[[]]],[11,"instance_name","","The instance name as defined in the SQL Browser. Only…",4,[[]]],[11,"encryption","","Set the preferred encryption level.",4,[[["encryptionlevel",4]]]],[11,"trust_cert","","If set, the server certificate will not be validated and…",4,[[]]],[11,"authentication","","Sets the authentication method.",4,[[["authmethod",4]]]],[11,"get_addr","","Get the host address including port",4,[[],["string",3]]],[11,"from_ado_string","","Creates a new `Config` from an ADO.NET connection string.",4,[[],["result",6]]],[11,"connect","","Uses an instance of [`Config`] to specify the connection…",5,[[["config",3]]]],[11,"execute","","Executes SQL statements in the SQL Server, returning the…",5,[[]]],[11,"query","","Executes SQL statements in the SQL Server, returning…",5,[[]]],[11,"simple_query","","Execute multiple queries, delimited with `;` and return…",5,[[]]],[0,"error","","Error module",null,null],[4,"IoErrorKind","tiberius::error","A list specifying general categories of I/O error.",null,null],[13,"NotFound","","An entity was not found, often a file.",6,null],[13,"PermissionDenied","","The operation lacked the necessary privileges to complete.",6,null],[13,"ConnectionRefused","","The connection was refused by the remote server.",6,null],[13,"ConnectionReset","","The connection was reset by the remote server.",6,null],[13,"ConnectionAborted","","The connection was aborted (terminated) by the remote…",6,null],[13,"NotConnected","","The network operation failed because it was not connected…",6,null],[13,"AddrInUse","","A socket address could not be bound because the address is…",6,null],[13,"AddrNotAvailable","","A nonexistent interface was requested or the requested…",6,null],[13,"BrokenPipe","","The operation failed because a pipe was closed.",6,null],[13,"AlreadyExists","","An entity already exists, often a file.",6,null],[13,"WouldBlock","","The operation needs to block to complete, but the blocking…",6,null],[13,"InvalidInput","","A parameter was incorrect.",6,null],[13,"InvalidData","","Data not valid for the operation were encountered.",6,null],[13,"TimedOut","","The I/O operation\'s timeout expired, causing it to be…",6,null],[13,"WriteZero","","An error returned when an operation could not be completed…",6,null],[13,"Interrupted","","This operation was interrupted.",6,null],[13,"Other","","Any I/O error not part of this list.",6,null],[13,"UnexpectedEof","","An error returned when an operation could not be completed…",6,null],[3,"TokenError","","An error token returned from the server.",null,null],[4,"Error","","A unified error enum that contains several errors that…",null,null],[13,"Io","","An error occured when performing I/O to the server.",7,null],[12,"kind","tiberius::error::Error","A list specifying general categories of I/O error.",8,null],[12,"message","","The error description.",8,null],[13,"Protocol","tiberius::error","An error happened during the request or response parsing.",7,null],[13,"Encoding","","Server responded with encoding not supported.",7,null],[13,"Conversion","","Conversion failure from one type to another.",7,null],[13,"Utf8","","Tried to convert data to UTF-8 that was not valid.",7,null],[13,"Utf16","","Tried to convert data to UTF-16 that was not valid.",7,null],[13,"ParseInt","","Tried to parse an integer that was not an integer.",7,null],[13,"Server","","An error returned by the server.",7,null],[13,"Tls","","An error in the TLS handshake.",7,null],[11,"columns","tiberius","Names of the columns of the current resultset. Order is…",9,[[],["option",4]]],[11,"next_resultset","","Returns `true` if stream has more result sets available.…",9,[[]]],[11,"into_results","","Collects results from all queries in the stream into…",9,[[]]],[11,"into_first_result","","Collects the output of the first query, dropping any…",9,[[]]],[11,"into_row","","Collects the first row from the output of the first query,…",9,[[]]],[11,"rows_affected","","A slice of numbers of rows affected in the same order as…",10,[[]]],[11,"total","","Aggregates all resulting row counts into a sum.",10,[[]]],[11,"name","","The name of the column.",11,[[]]],[11,"column_type","","The type of the column.",11,[[],["columntype",4]]],[11,"columns","","Columns defining the row data. Columns listed here are in…",12,[[]]],[11,"len","","Returns the number of columns in the row.",12,[[]]],[11,"get","","Retrieve a column value for a given column index, which…",12,[[],["option",4]]],[11,"try_get","","Retrieve a column\'s value for a given column index.",12,[[],[["result",6],["option",4]]]],[11,"code","tiberius::error","The error code, see descriptions from [the manual].",13,[[]]],[11,"state","","The error state, used as a modifier to the error number.",13,[[]]],[11,"class","","The class (severity) of the error. A class of less than 10…",13,[[]]],[11,"message","","The error message returned from the server.",13,[[]]],[11,"server","","The server name.",13,[[]]],[11,"procedure","","The name of the stored procedure causing the error.",13,[[]]],[11,"line","","The line number in the SQL batch or stored procedure that…",13,[[]]],[0,"numeric","tiberius","Representations of numeric types.",null,null],[3,"Numeric","tiberius::numeric","Represent a sql Decimal / Numeric type. It is stored in a…",null,null],[0,"time","tiberius","Date and time handling.",null,null],[3,"DateTime","tiberius::time","A presentation of `datetime` type in the server.",null,null],[3,"SmallDateTime","","A presentation of `smalldatetime` type in the server.",null,null],[3,"Date","","A presentation of `date` type in the server.",null,null],[3,"Time","","A presentation of `time` type in the server.",null,null],[3,"DateTime2","","A presentation of `datetime2` type in the server.",null,null],[3,"DateTimeOffset","","A presentation of `datetimeoffset` type in the server.",null,null],[0,"xml","tiberius","The XML containers",null,null],[3,"XmlSchema","tiberius::xml","Provides information of the location for the schema.",null,null],[3,"XmlData","","A representation of XML data in TDS. Holds the data as a…",null,null],[6,"Result","tiberius","An alias for a result that holds crate\'s error type as the…",null,null],[8,"FromSql","","A conversion trait from a TDS type by-reference.",null,null],[10,"from_sql","","Returns the value, `None` being a null value, copying the…",14,[[["columndata",4]],[["option",4],["result",6]]]],[8,"FromSqlOwned","","A conversion trait from a TDS type by-value.",null,null],[10,"from_sql_owned","","Returns the value, `None` being a null value, taking the…",15,[[["columndata",4]],[["option",4],["result",6]]]],[8,"SqlBrowser","","An extension trait to a `TcpStream` to find a port and…",null,null],[10,"connect_named","","If the given builder defines a named instance, finds the…",16,[[["config",3]],[["pin",3],["box",3]]]],[8,"IntoSql","","A by-value conversion trait to a TDS type.",null,null],[10,"into_sql","","Convert to a value understood by the SQL Server.…",17,[[],["columndata",4]]],[8,"ToSql","","A conversion trait to a TDS type.",null,null],[10,"to_sql","","Convert to a value understood by the SQL Server.…",18,[[],["columndata",4]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"to_string","","",19,[[],["string",3]]],[11,"borrow","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"try_poll_next","","",9,[[["pin",3],["context",3]],[["poll",4],["option",4]]]],[11,"vzip","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"into_iter","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"into_iter","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","tiberius::error","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"borrow","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","tiberius::numeric","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"to_string","","",20,[[],["string",3]]],[11,"borrow","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"from","tiberius::time","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"vzip","","",21,[[]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"vzip","","",22,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"vzip","","",23,[[]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"borrow_mut","","",24,[[]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"vzip","","",24,[[]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"borrow_mut","","",25,[[]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"vzip","","",25,[[]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"borrow_mut","","",26,[[]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"vzip","","",26,[[]]],[11,"from","tiberius::xml","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"borrow_mut","","",27,[[]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"vzip","","",27,[[]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"to_owned","","",28,[[]]],[11,"clone_into","","",28,[[]]],[11,"to_string","","",28,[[],["string",3]]],[11,"borrow","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"borrow_mut","","",28,[[]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"vzip","","",28,[[]]],[11,"fmt","tiberius::error","",6,[[["formatter",3]],[["error",3],["result",4]]]],[11,"cmp","","",6,[[["errorkind",4]],["ordering",4]]],[11,"partial_cmp","","",6,[[["errorkind",4]],[["ordering",4],["option",4]]]],[11,"clone","","",6,[[],["errorkind",4]]],[11,"eq","","",6,[[["errorkind",4]]]],[11,"hash","","",6,[[]]],[11,"eq","tiberius","",19,[[["uuid",3]]]],[11,"ne","","",19,[[["uuid",3]]]],[11,"fmt","","",19,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",19,[[["formatter",3]],[["error",3],["result",4]]]],[11,"cmp","","",19,[[["uuid",3]],["ordering",4]]],[11,"fmt","","",19,[[["formatter",3]],[["error",3],["result",4]]]],[11,"partial_cmp","","",19,[[["uuid",3]],[["ordering",4],["option",4]]]],[11,"lt","","",19,[[["uuid",3]]]],[11,"le","","",19,[[["uuid",3]]]],[11,"gt","","",19,[[["uuid",3]]]],[11,"ge","","",19,[[["uuid",3]]]],[11,"fmt","","",19,[[["formatter",3]],[["error",3],["result",4]]]],[11,"default","","",19,[[],["uuid",3]]],[11,"hash","","",19,[[]]],[11,"clone","","",19,[[],["uuid",3]]],[11,"from_str","","",19,[[],[["result",4],["uuid",3]]]],[11,"from_sql","","",19,[[["columndata",4]],[["option",4],["result",6]]]],[11,"from_sql","tiberius::numeric","",20,[[["columndata",4]],[["option",4],["result",6]]]],[11,"from_sql_owned","tiberius","",19,[[["columndata",4]],[["option",4],["result",6]]]],[11,"from_sql_owned","tiberius::numeric","",20,[[["columndata",4]],[["option",4],["result",6]]]],[11,"from_sql_owned","tiberius::xml","",28,[[["columndata",4]],[["option",4],["result",6]]]],[11,"to_sql","tiberius::numeric","",20,[[],["columndata",4]]],[11,"to_sql","tiberius::xml","",28,[[],["columndata",4]]],[11,"to_sql","tiberius","",19,[[],["columndata",4]]],[11,"into_sql","tiberius::xml","",28,[[],["columndata",4]]],[11,"as_ref","","",28,[[]]],[11,"from","tiberius::error","",7,[[["error",3]]]],[11,"from","","",7,[[["error",3]]]],[11,"from","","",7,[[["infallible",4]]]],[11,"from","","",7,[[["error",3]],["error",4]]],[11,"from","","",7,[[["parseinterror",3]],["error",4]]],[11,"from","","",7,[[["utf8error",3]],["error",4]]],[11,"from","","",7,[[["fromutf8error",3]],["error",4]]],[11,"from","","",7,[[["fromutf16error",3]],["error",4]]],[11,"into_iter","tiberius","",10,[[]]],[11,"into_iter","","",12,[[]]],[11,"clone","","",0,[[],["authmethod",4]]],[11,"clone","","",4,[[],["config",3]]],[11,"clone","tiberius::error","",7,[[],["error",4]]],[11,"clone","tiberius","",1,[[],["columntype",4]]],[11,"clone","","",2,[[],["columndata",4]]],[11,"clone","tiberius::error","",13,[[],["tokenerror",3]]],[11,"clone","tiberius::numeric","",20,[[],["numeric",3]]],[11,"clone","tiberius::time","",21,[[],["datetime",3]]],[11,"clone","","",22,[[],["smalldatetime",3]]],[11,"clone","","",23,[[],["date",3]]],[11,"clone","","",24,[[],["time",3]]],[11,"clone","","",25,[[],["datetime2",3]]],[11,"clone","","",26,[[],["datetimeoffset",3]]],[11,"clone","tiberius::xml","",27,[[],["xmlschema",3]]],[11,"clone","","",28,[[],["xmldata",3]]],[11,"clone","tiberius","",3,[[],["encryptionlevel",4]]],[11,"default","","",4,[[]]],[11,"eq","","",0,[[["authmethod",4]]]],[11,"ne","","",0,[[["authmethod",4]]]],[11,"eq","tiberius::numeric","",20,[[]]],[11,"eq","tiberius::time","",21,[[["datetime",3]]]],[11,"ne","","",21,[[["datetime",3]]]],[11,"eq","","",22,[[["smalldatetime",3]]]],[11,"ne","","",22,[[["smalldatetime",3]]]],[11,"eq","","",23,[[["date",3]]]],[11,"ne","","",23,[[["date",3]]]],[11,"eq","","",24,[[["time",3]]]],[11,"eq","","",25,[[["datetime2",3]]]],[11,"ne","","",25,[[["datetime2",3]]]],[11,"eq","","",26,[[["datetimeoffset",3]]]],[11,"ne","","",26,[[["datetimeoffset",3]]]],[11,"eq","tiberius::xml","",27,[[["xmlschema",3]]]],[11,"ne","","",27,[[["xmlschema",3]]]],[11,"eq","","",28,[[["xmldata",3]]]],[11,"ne","","",28,[[["xmldata",3]]]],[11,"eq","tiberius","",3,[[["encryptionlevel",4]]]],[11,"to_string","tiberius::xml","",28,[[],["string",3]]],[11,"fmt","tiberius","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius::error","",7,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius::error","",13,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius::numeric","",20,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","tiberius::time","",21,[[["formatter",3]],["result",6]]],[11,"fmt","","",22,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",24,[[["formatter",3]],["result",6]]],[11,"fmt","","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius::xml","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius","",3,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius::error","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","tiberius::numeric","",20,[[["formatter",3]],[["result",4],["error",3]]]],[11,"try_from","tiberius","",3,[[],[["result",4],["encryptionlevel",4]]]],[11,"try_from","","",3,[[],[["result",4],["encryptionlevel",4]]]],[11,"poll_next","","",9,[[["context",3],["pin",3]],[["poll",4],["option",4]]]],[11,"nil","","The \'nil UUID\'.",19,[[],["uuid",3]]],[11,"from_fields","","Creates a UUID from four field values in big-endian order.",19,[[],[["result",4],["uuid",3],["error",3]]]],[11,"from_fields_le","","Creates a UUID from four field values in little-endian…",19,[[],[["result",4],["uuid",3],["error",3]]]],[11,"from_u128","","Creates a UUID from a 128bit value in big-endian order.",19,[[],["uuid",3]]],[11,"from_u128_le","","Creates a UUID from a 128bit value in little-endian order.",19,[[],["uuid",3]]],[11,"from_slice","","Creates a UUID using the supplied big-endian bytes.",19,[[],[["result",4],["uuid",3],["error",3]]]],[11,"from_bytes","","Creates a UUID using the supplied big-endian bytes.",19,[[],["uuid",3]]],[11,"parse_str","","Parses a `Uuid` from a string of hexadecimal digits with…",19,[[],[["result",4],["uuid",3],["error",3]]]],[11,"to_hyphenated","","Get a [`Hyphenated`] formatter.",19,[[],["hyphenated",3]]],[11,"to_hyphenated_ref","","Get a borrowed [`HyphenatedRef`] formatter.",19,[[],["hyphenatedref",3]]],[11,"to_simple","","Get a [`Simple`] formatter.",19,[[],["simple",3]]],[11,"to_simple_ref","","Get a borrowed [`SimpleRef`] formatter.",19,[[],["simpleref",3]]],[11,"to_urn","","Get a [`Urn`] formatter.",19,[[],["urn",3]]],[11,"to_urn_ref","","Get a borrowed [`UrnRef`] formatter.",19,[[],["urnref",3]]],[11,"new_v1","","Create a new UUID (version 1) using a time value +…",19,[[["timestamp",3]],[["result",4],["uuid",3],["error",3]]]],[11,"to_timestamp","","Returns an optional [`Timestamp`] storing the timestamp…",19,[[],[["option",4],["timestamp",3]]]],[11,"new_v3","","Creates a UUID using a name from a namespace, based on the…",19,[[["uuid",3]],["uuid",3]]],[11,"new_v4","","Creates a random UUID.",19,[[],["uuid",3]]],[18,"NAMESPACE_DNS","","UUID namespace for Domain Name System (DNS).",19,null],[18,"NAMESPACE_OID","","UUID namespace for ISO Object Identifiers (OIDs).",19,null],[18,"NAMESPACE_URL","","UUID namespace for Uniform Resource Locators (URLs).",19,null],[18,"NAMESPACE_X500","","UUID namespace for X.500 Distinguished Names (DNs).",19,null],[11,"get_variant","","Returns the variant of the UUID structure.",19,[[],[["option",4],["variant",4]]]],[11,"get_version_num","","Returns the version number of the UUID.",19,[[]]],[11,"get_version","","Returns the version of the UUID.",19,[[],[["option",4],["version",4]]]],[11,"as_fields","","Returns the four field values of the UUID in big-endian…",19,[[]]],[11,"to_fields_le","","Returns the four field values of the UUID in little-endian…",19,[[]]],[11,"as_u128","","Returns a 128bit value containing the UUID data.",19,[[]]],[11,"to_u128_le","","Returns a 128bit little-endian value containing the UUID…",19,[[]]],[11,"as_bytes","","Returns an array of 16 octets containing the UUID data.",19,[[]]],[11,"is_nil","","Tests if the UUID is nil.",19,[[]]],[11,"encode_buffer","","A buffer that can be used for `encode_...` calls, that is…",19,[[]]],[11,"new_with_scale","tiberius::numeric","Creates a new Numeric value.",20,[[]]],[11,"dec_part","","Extract the decimal part.",20,[[]]],[11,"int_part","","Extract the integer part.",20,[[]]],[11,"scale","","The scale (where is the decimal point) of the value.",20,[[]]],[11,"value","","The internal integer value",20,[[]]],[11,"precision","","The precision of the `Number` as a number of digits.",20,[[]]],[11,"new","tiberius::time","Construct a new `DateTime` instance.",21,[[]]],[11,"days","","Days since 1st of January, 1900 (including the negative…",21,[[]]],[11,"seconds_fragments","","1/300 of a second, so a value of 300 equals 1 second…",21,[[]]],[11,"new","","Construct a new `SmallDateTime` instance.",22,[[]]],[11,"days","","Days since 1st of January, 1900.",22,[[]]],[11,"seconds_fragments","","1/300 of a second, so a value of 300 equals 1 second…",22,[[]]],[11,"new","","Construct a new `Date`",23,[[],["date",3]]],[11,"days","","The number of days from 1st of January, year 1.",23,[[]]],[11,"new","","Construct a new `Time`",24,[[]]],[11,"increments","","Number of 10^-n second increments since midnight, where…",24,[[]]],[11,"scale","","The accuracy of the increments.",24,[[]]],[11,"new","","Construct a new `DateTime2` from the date and time…",25,[[["time",3],["date",3]]]],[11,"date","","The date component.",25,[[],["date",3]]],[11,"time","","The time component.",25,[[],["time",3]]],[11,"new","","Construct a new `DateTimeOffset` from a `datetime2`,…",26,[[["datetime2",3]]]],[11,"datetime2","","The date and time part.",26,[[],["datetime2",3]]],[11,"offset","","Number of minutes from UTC.",26,[[]]],[11,"db_name","tiberius::xml","Specifies the name of the database where the schema…",27,[[]]],[11,"owner","","Specifies the name of the relational schema containing the…",27,[[]]],[11,"collection","","Specifies the name of the XML schema collection to which…",27,[[]]],[11,"new","","Create a new XmlData with the given string. Validation of…",28,[[]]],[11,"schema","","Returns information about the schema of the XML file, if…",28,[[],[["xmlschema",3],["option",4]]]],[11,"into_string","","Takes the XML string out from the struct.",28,[[],["string",3]]]],"p":[[4,"AuthMethod"],[4,"ColumnType"],[4,"ColumnData"],[4,"EncryptionLevel"],[3,"Config"],[3,"Client"],[4,"IoErrorKind"],[4,"Error"],[13,"Io"],[3,"QueryResult"],[3,"ExecuteResult"],[3,"Column"],[3,"Row"],[3,"TokenError"],[8,"FromSql"],[8,"FromSqlOwned"],[8,"SqlBrowser"],[8,"IntoSql"],[8,"ToSql"],[3,"Uuid"],[3,"Numeric"],[3,"DateTime"],[3,"SmallDateTime"],[3,"Date"],[3,"Time"],[3,"DateTime2"],[3,"DateTimeOffset"],[3,"XmlSchema"],[3,"XmlData"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);